const Home = require("../models/home");// model import
const Favourite = require("../models/favourite");
const e = require("express");
exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        
        res.render("store/index", { 
            title: "Our Airbnb Store", 
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
    Favourite.fetchAll((favouriteIds) => {
        Home.fetchAll((homes) => {
            const favHomes = homes.filter(home => favouriteIds.includes(home.id));
            res.render("store/favourites", { title: "Favourites", homes: favHomes });
        })
    })
}
exports.postFavourites = (req, res, next) => {
    const homeId = req.body.id;
    Favourite.addFavourite(homeId),error => {
        if (error) {
            console.log("Error while adding home", error);
        }
        res.redirect("/favourites");
    };
}
exports.postRemoveFavourite = (req, res, next) => {
    const homeId = req.params.homeId;
    Favourite.deleteById(homeId, (error) => {
        if (error) {
            console.log("Error while deleting home", error);
        }
        res.redirect("/favourites");
    });
}