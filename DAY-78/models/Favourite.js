const { ObjectId } = require('mongodb');
const {getDb} = require('../util/database');
module.exports = class Favourite {

  static fetchAll() {
    const db=getDb();
    return db.collection('favourites').find().toArray().then((favourites) => {
      return favourites.map(favourite => favourite.homeId.toString());
    }).catch((error) => {
      console.log(error);
    });
  }

  static addToFavourites(homeId) {
    const db = getDb();
    return db.collection('favourites').insertOne({homeId: new ObjectId(String(homeId))}).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
   
  }

  static deleteById(removeHomeId) {
   const db = getDb();
    return db.collection('favourites').deleteOne({homeId:new ObjectId(String(removeHomeId))}).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
