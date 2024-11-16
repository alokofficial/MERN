const { ObjectId } = require('../../DAY-79 copy/node_modules/mongodb/mongodb');
const {getDb} = require('../util/database');
module.exports = class Favourite {

  constructor(homeId) {
    this.homeId = new ObjectId(String(homeId));
  }

  save(){
    const db = getDb();
    return db
      .collection('favourites')
      .findOne({homeId:this.homeId})
      .then(existingFavourite => {
        if(!existingFavourite){
          return db
          .collection('favourites')
          .insertOne(this)
          .then((result) => {
            console.log(result);
          })
          ;
        }
        return Promise.resolve();
      })
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('favourites').find().toArray();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection('favourites').deleteOne({homeId: new ObjectId(String(homeId))});
  }

  // static addToFavourites(homeId) {
   
  // }

  // static deleteById(removeHomeId) {

  // }
}
