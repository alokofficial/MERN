const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path-util");

const homeFilePath = path.join(rootDir, "data", "homes.json");




module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(callback) {
        Home.fetchAll(registeredHomes => {
          if (this.id) { // edit case
            registeredHomes = registeredHomes.map(home => home.id !== this.id ? home : this);
          } else { // new case
            this.id = Math.random().toString();
            registeredHomes.push(this);
          }
          fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), callback);
        });
      }
    static fetchAll(callback){
        const filePath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(filePath, (err,data)=>{
            let homes = [];
            if(!err){ 
                homes=JSON.parse(data);
            }
            callback(homes);
        })
    }
    static findById(homeId, callback){
        Home.fetchAll((homes) => {
            const home = homes.find(home => home.id === homeId);
            callback(home);
        })
    }
    static deleteById(homeId){
        Home.fetchAll(homes => {
            const newHomes = homes.filter(home => home.id !== homeId);
            fs.writeFile(homeFilePath, JSON.stringify(newHomes), callback);
          });
    }
 
}
