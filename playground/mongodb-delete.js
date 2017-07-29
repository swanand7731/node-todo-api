const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log(err);
    return console.log('Unable to connect to mongodb server');
  }
  //deleteMany
  // db.collection('Todos').deleteMany({text:'Have a bath'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Have a bath'}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'swanand'}).then((result)=>{
  //   console.log(result);
  // });
  // db.collection('Users').deleteOne({name:'Abhishek'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete(
    {_id:new ObjectID('597cb508c84fdc3f9f51fb66')})
    .then((result)=>{
      console.log(result);
    });
  // db.close();
});
