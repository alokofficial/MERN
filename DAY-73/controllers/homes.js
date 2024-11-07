const Home = require("../models/home");// model import

exports.getAddHome = (req, res, next) => { //get request of add home
  res.render("add-home", { title: "Add Home to Airbnb", currentPage: "add-home" });
};

exports.postAddHome = (req, res, next) => { // post request of add home
    const { houseName, price, location, rating, photoUrl } = req.body;
    const home = new Home(houseName, price, location, rating, photoUrl);
    home.save();
    res.render("home-added", { 
        title: "Home Added Successfully", 
        currentPage: "home-added",
     });
  }

  exports.getHomes = (req, res, next) => {// get request of home to show all the homes
   const home = Home.fetchAll();
    
    res.render("index", { 
        title: "Airbnb Home", 
        currentPage: "index",
        registeredHomes: home,
     });
  }