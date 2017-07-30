var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoApp');

var Todo  = mongoose.model('Todo', {
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedAt:{
    type:String
  }
});

var newTodo = new Todo({
    text:'Eat Food',
    completed:false,
    completedAt:new Date().toString()
});

newTodo.save().then((doc)=>{
  console.log('Saved todo', doc);
},(e)=>{
  console.log(e);
  console.log('Unable to save Todo');
});
//save new record
