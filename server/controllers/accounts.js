const Account = require("../models/Account");

module.exports = {
  getAccount: async (req, res) => {
    try {
      const accountItems = await Account.find();
      res.json(accountItems);
    } catch (err) {
      console.log(err);
    }
  },
  createAccount: async (req, res) => {
    try {
      await console.log(req.body);
      await Account.create(req.body);
      console.log("Account has been created!");
      res.json("Account has been created!");
    } catch (err) {
      console.log(err);
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
