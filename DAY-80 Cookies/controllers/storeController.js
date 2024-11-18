const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "Tumahara airbnb", isLoggedIn: req.isLoggedIn });
  })
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/homes", { homes: registeredHomes, pageTitle: "Tumahara airbnb", isLoggedIn: req.isLoggedIn });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.find().populate("homeId").then(favIdHomes => {
    // console.log(favouriteIds);
    favouriteHomes = favIdHomes.map(favIdHome => favIdHome.homeId);
      res.render("store/favourites", { homes: favouriteHomes, pageTitle: "Favourites", isLoggedIn:req.isLoggedIn });
    });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({homeId}).then(favourite => {
    if(favourite){
      console.log("Home already in favourites");
      res.redirect("/favourites");
    } else {
      const newFavourite = new Favourite({homeId});
      newFavourite.save().then(() => {
        res.redirect("/favourites");
      }).catch(error => {
        console.log("Error while adding to favourites", error);
      })
    }
  }).catch(error => {
    console.log("Error while adding to favourites", error);
  })
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({homeId}).then(() => {
    res.redirect("/favourites");
  }).catch(error => {
    console.log("Error while remove from favourites ", error);
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then((home)=> {
    
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail", isLoggedIn:req.isLoggedIn });
  })
}
