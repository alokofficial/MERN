const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path-util");

const filePath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite {
   static addFavourite(homeId){
    this.getFavourites((favourites) => {
        if(favourites.includes(homeId)){
            return;
        }
        favourites.push(homeId);
        fs.writeFile(filePath, JSON.stringify(favourites), (err) => {
            console.log(err);
        });
    })
   }

   static getFavourites(callback){
    fs.readFile(filePath, (err,data)=>{
        callback(!err ? JSON.parse(data) : []);
    })
   }
}