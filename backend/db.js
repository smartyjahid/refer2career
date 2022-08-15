const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
//const url = "mongodb://Refer2Career:1357902468@cluster0-shard-00-00.rkuc0.mongodb.net:27017,cluster0-shard-00-01.rkuc0.mongodb.net:27017,cluster0-shard-00-02.rkuc0.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-6z1czw-shard-0&authSource=admin&retryWrites=true&w=majority";

var _db;

module.exports = {
    connectToServer: function (callback) {
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
            //_db = client.db('Refer2Career');
            _db = client.db('insta-jobs');
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
};
