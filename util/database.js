const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>{
    let mongoConnecitonString = 'mongodb+srv://root:rootroot@cluster0.ln9qf.mongodb.net/shop?retryWrites=true&w=majority';

    mongoclient.connect(mongoConnecitonString, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };
  
  const getDb = () => {
    if (_db) {
      return _db;
    }
    throw 'No database found!';
  };
  
  exports.mongoConnect = mongoConnect;
  exports.getDb = getDb;


