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
  // createTodo: async (req, res)=>{
  //     try{
  //         await Account.create({ user: "James", balance: "500000" });
  //         console.log('Todo has been added!')
  //         res.redirect('/todos')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
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
