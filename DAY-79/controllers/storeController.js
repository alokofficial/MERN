const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  })
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/homes", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll().then(favouriteIds => {
    Home.fetchAll().then((registeredHomes) => {
      favouriteIds = favouriteIds.map(favId => favId.homeId)
      console.log(favouriteIds);
      const favouriteHomes = registeredHomes.filter(home => favouriteIds.toString().includes(home._id.toString()));
      res.render("store/favourites", { homes: favouriteHomes, pageTitle: "Favourites" });
    });
  })

};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const favourite = new Favourite(homeId);
  favourite.save().then(() => {
    res.redirect("/favourites");
  }).catch(error => {
    console.log("Error while adding to favourites", error);
  })
};


//   Favourite.addToFavourites(homeId).then(() => {
//     res.redirect("/favourites");
//   }).catch(error => {
//     console.log("Error while adding to favourites", error);
//   })
// };

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId).then(() => {
    res.redirect("/favourites");
  }).then(error => {
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
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  })
}