const { getDb } = require("../util/database");
const { ObjectId } = require("mongodb");

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
    const db = getDb();
    if (this.id) {
      return db
        .collection("homes")
        .updateOne({ _id: ObjectId(String(this.id)) }, { $set: this })
        .then((result) => {
          console.log(result);
        });
    } else {
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

