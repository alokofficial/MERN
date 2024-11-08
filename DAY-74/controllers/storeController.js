const Home = require("../models/home");// model import
exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        
        res.render("index", { 
            title: "Airbnb Store", 
            homes: registeredHomes,
         });
    })
}
exports.getHomes = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/homes', { 
            title: "Airbnb Store", 
            homes: registeredHomes,
         });
    })
    
}
exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId, (home) => {
        if (!home) {
            console.log("Home not found");
            return res.redirect("/homes");
          }
          res.render("store/home-detail", { home: home, title: "Home Detail" });
    })
}
exports.getFavourites = (req, res, next) => {
    res.render("index", { title: "Airbnb Store"});
}
exports.postFavourites = (req, res, next) => {
    res.render("index", { title: "Airbnb Store"});
}
exports.deleteFavourites = (req, res, next) => {
    res.render("index", { title: "Airbnb Store"});
}