const Account = require("../models/Account");
const Address = require("../models/Address");
const cloudinary = require("../middleware/cloudinary");
const validator = require("validator");

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
const getAssetInfo = async (publicId) => {
  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
    // Get details about the asset
    const result = await cloudinary.api.resource(publicId, options);
    console.log(result);
    return result.colors;
  } catch (error) {
    console.error(error);
  }
};

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image
// focused on the faces, applying an outline of the
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
const createImageTag = (publicId, ...colors) => {
  // Set the effect color and background color
  const [effectColor, backgroundColor] = colors;

  // Create an image tag with transformations applied to the src URL
  let imageTag = cloudinary.image(publicId, {
    transformation: [
      { width: 250, height: 250, gravity: "faces", crop: "thumb" },
      { radius: "max" },
      { effect: "outline:10", color: effectColor },
      { background: backgroundColor },
    ],
  });

  return imageTag;
};

module.exports = {
  getAccount: async (req, res) => {
    try {
      const account = await Account.findOne({
        userName: req.user.userName,
      });
      const address = await Address.findOne({
        id: req.user.id,
      });
      if (!account) return res.status(403).json(null);
      res.status(200).json({ ...account.toJSON(), ...address.toJSON() });
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  },
  postAvatar: async (req, res) => {
    try {
      const upload = await uploadImage(req.file.path);
      await Account.findByIdAndUpdate(req.user.id, {
        cloudinary_id: upload,
      });
      res.json(upload);
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  },
  putGreeting: async (req, res) => {
    const validationErrors = [];
    if (!validator.isAscii(req.body.message, ["en-US"]))
      validationErrors.push({
        msg: "Unknown characters detected",
      });
    if (validator.isEmpty(req.body.message, { ignore_whitespace: true }))
      validationErrors.push({
        msg: "Message cannot be empty",
      });
    if (validationErrors.length) {
      return res.status(400).json(validationErrors);
    }

    try {
      const message = req.body.message;
      await Account.findByIdAndUpdate(req.user.id, {
        greeting: message,
      });
      res.status(200).json("Success!");
    } catch (err) {
      res.status(400).json(err);
    }
  },
  putAddress: async (req, res) => {
    const validationErrors = [];
    if (
      !validator.isAlphanumeric(req.body.street_address, "en-US", {
        ignore: " ",
      })
    )
      validationErrors.push({
        msg: "Invalid street address",
      });
    if (req.body.apartment_suite) {
      if (
        !validator.isAlphanumeric(req.body.apartment_suite, "en-US", {
          ignore: " ",
        })
      )
        validationErrors.push({
          msg: "Invalid apartment/suite",
        });
    }
    if (
      !validator.isAlpha(req.body.city, "en-US", {
        ignore: " ",
      })
    )
      validationErrors.push({
        msg: "Invalid city",
      });
    if (!validator.isPostalCode(req.body.zip, "US"))
      validationErrors.push({
        msg: "Invalid ZIP code",
      });

    if (validationErrors.length) {
      return res.status(400).json(validationErrors);
    }

    const address = new Address({
      id: req.user.id,
      street_address: req.body.street_address,
      apartment_suite: req.body.apartment_suite,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    });
    try {
      const existingUser = await Address.findOne({ id: req.user.id });
      if (existingUser) {
        await Address.findOneAndUpdate(
          { id: req.user.id },
          {
            id: req.user.id,
            street_address: req.body.street_address,
            apartment_suite: req.body.apartment_suite,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
          }
        );
        return res.status(200).json("Success!");
      }
      await Address.create(address);
      res.status(200).json("Success!");
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  },
  putMailAddress: async (req, res) => {
    const validationErrors = [];
    if (
      !validator.isAlphanumeric(req.body.mail_address, "en-US", {
        ignore: " ",
      })
    )
      validationErrors.push({
        msg: "Invalid mailing address",
      });
    if (req.body.mail_apartment) {
      if (
        !validator.isAlphanumeric(req.body.mail_apartment, "en-US", {
          ignore: " ",
        })
      )
        validationErrors.push({
          msg: "Invalid apartment/suite",
        });
    }
    if (
      !validator.isAlpha(req.body.mail_city, "en-US", {
        ignore: " ",
      })
    )
      validationErrors.push({
        msg: "Invalid city",
      });
    if (!validator.isPostalCode(req.body.mail_zip, "US"))
      validationErrors.push({
        msg: "Invalid ZIP code",
      });

    if (validationErrors.length) {
      console.log(validationErrors);
      return res.status(400).json(validationErrors);
    }

    try {
      await Address.findOneAndUpdate(
        { id: req.user.id },
        {
          id: req.user.id,
          mail_address: req.body.mail_address,
          mail_apartment: req.body.mail_apartment,
          mail_city: req.body.mail_city,
          mail_state: req.body.mail_state,
          mail_zip: req.body.mail_zip,
        }
      );
      return res.status(200).json("Success!");
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  },
  putEmail: async (req, res) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Invalid Email" });

    if (!validator.equals(req.body.email, req.body.confirm))
      validationErrors.push({ msg: "Emails do not match" });

    if (validationErrors.length) {
      return res.status(400).json(validationErrors);
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });
    try {
      const existingEmail = await Account.findOne({ email: req.body.email });
      if (existingEmail) {
        return res.status(400).json([{ msg: "Email already in use" }]);
      }
      await Account.findByIdAndUpdate(req.user.id, {
        email: req.body.email,
      });
      res.status(200).json("Success!");
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  },
  // deleteTodo: async (req, res)=>{
  //     console.log(req.body.todoIdFromJSFile)
  //     try{
  //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
  //         console.log('Deleted Todo')
  //         res.json('Deleted It')
  //     }catch(err){
  //         console.log(err)
  //     }
  // }
};
