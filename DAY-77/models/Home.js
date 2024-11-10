const Favourite = require('./Favourite.js');
const {getDb} = require('../util/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }
  save() {
    const db=getDb();
    return db.collection('homes').insertOne(this).then((result) => {
      console.log(result);
    });
  }

  
  static fetchAll() {
   const db=getDb();
    return db.collection('homes').find().toArray().then((homes) => {
      return homes;
    }).catch((error) => {
      console.log(error);
    });
  }

  static findById(homeId) {
    
  }
 
  static deleteById(homeId) {
    
  }
}