const Account = require("../models/Account");

module.exports = {
  getAccount: async (req, res) => {
    try {
      console.log(req.params);
      const accountItems = await Account.find({ username: req.params.id });
      res.status(200).json(accountItems);
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  },
  loginAccount: async (req, res) => {
    try {
      const loginInfo = await Account.find({
        username: req.body.username.toLowerCase(),
        password: req.body.password,
      });
      (await loginInfo.length) > 0
        ? res.status(200).json("Success!")
        : res.status(401).json("Incorrect username or password.");
    } catch (err) {
      res.status(400).json("An error occurred.");
    }
  },
  createAccount: async (req, res) => {
    try {
      await Account.create(req.body);
      res.status(200).json("Account has been created!");
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
