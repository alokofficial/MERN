const { getDb } = require("../util/database");
const { ObjectId } = require("../../DAY-79 copy/node_modules/mongodb/mongodb");

module.exports = class Home {
  constructor( houseName, price, location, rating, photoUrl, description,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    if(_id){
      this._id=new ObjectId(String(_id));
    }
  }
  save() {
    const db = getDb();
    if (this._id) { // edit case
      return db
        .collection("homes")
        .updateOne({ _id:this._id }, { $set: this })
        .then((result) => {
          console.log(result);
        });
    } else { // new case
      return db
        .collection("homes")
        .insertOne(this)
        .then((result) => {
          console.log(result);
        });
    }
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("homes")
      .find()
      .toArray()
      .then((homes) => {
        return homes;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static findById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .find({ _id:new ObjectId(String(homeId)) })
      .next()
      .then((homes) => {
        return homes;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static deleteById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) })
      .then((result) => {
        console.log(result);
      });
  }
};

