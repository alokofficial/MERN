const mongoose = require("mongoose");
const Favourite = require("./Favourite");

const homeSchema = new mongoose.Schema({
  houseName:{
    type: String,
    required: true
  },
  price: {
    type: Number,
    required:true
  },
  location:{
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  photoUrl:String,
  description:String,
  // _id: mongoose.Schema.Types.ObjectId
})

// homeSchema.pre('findOneAndDelete', (next) => {
//   const homeId = this.getQuery()["_id"];
//   Favourite.deleteOne({ homeId: new ObjectId(String(homeId)) })
//   .then(() => {
//       next();
//   })
//   .catch((error) => {
//       console.log(error);
//       next(error);
//   });
// })



module.exports =  mongoose.model("Home", homeSchema);