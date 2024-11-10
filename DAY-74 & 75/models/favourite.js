const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path-util");

const favouriteFilePath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite {

    static fetchAll(callback){
        fs.readFile(favouriteFilePath, (err,data)=>{
            if(err){
                callback([]);
            } else {
                callback(JSON.parse(data));
            }
        })
    }
    static addFavourite(homeId, callback){
        Favourite.fetchAll(favouriteIds => {
            favouriteIds.push(homeId);
            fs.writeFile(favouriteFilePath, JSON.stringify(favouriteIds), callback);
          });
    }

   static deleteById(removeHomeId , callback){
    Favourite.fetchAll(homeIds => {
        const newHomesIds = homeIds.filter(homeId => removeHomeId !== homeId);
        fs.writeFile(favouriteFilePath, JSON.stringify(newHomesIds), callback);
      });
}
}