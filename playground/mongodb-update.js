const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log(err);
    return console.log('Unable to connect to mongodb server');
  }
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID("597c6d44b9f4f31794c56cec")
  }, {$set:{location:'Mumbai'}}, {returnOriginal:false})
  .then((result)=>{
    console.log(result);
  });
  // db.close();
});
