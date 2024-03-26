const Account = require("../models/Account");
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
      if (!account) return res.status(403).json(null);
      res.status(200).json(account);
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
        msg: "Message must contain only letters",
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
