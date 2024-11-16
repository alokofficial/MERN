const mongodb = require("../../DAY-79 copy/node_modules/mongodb/mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017";

let _db;
const mongoConnect = (callback) => {

    MongoClient.connect(url)
    .then((client) => {
        // console.log("connected to database",client);
        _db = client.db("airbnb");
        callback();
    })
    .catch((error) => {
        console.log("Error came while connecting to mongodb",error);
    })

}

const getDb = () => {
    if(!_db){
        throw "No database found";
    }
    return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;