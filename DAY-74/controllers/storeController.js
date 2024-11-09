const Home = require("../models/home");// model import
const Favourite = require("../models/favourite");
exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        
        res.render("store/index", { 
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
    Favourite.getFavourites((favourites) => {
        Home.fetchAll((homes) => {
            const favHomes = homes.filter(home => favourites.includes(home.id));
            res.render("store/favourites", { title: "Favourites", homes: favHomes });
        })
    })
}
exports.postFavourites = (req, res, next) => {
    const homeId = req.body.id;
    const home = Favourite.addFavourite(homeId);
    res.render("store/favourites", { title: "Favourites", homes:home});
    res.redirect("/favourites");
}
exports.deleteFavourites = (req, res, next) => {
    res.render("index", { title: "Airbnb Store"});
}