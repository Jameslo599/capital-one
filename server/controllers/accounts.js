const Account = require("../models/Account");

module.exports = {
  getAccount: async (req, res) => {
    try {
      const account = await Account.findOne({
        userName: req.params.id,
      });
      if (!account) return res.status(403).json(null);
      res.status(200).json(account);
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
