const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log(err);
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  db.collection('Todos').find().toArray().then((docs)=>{
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch docs', err);
  });

  // db.close();
});
