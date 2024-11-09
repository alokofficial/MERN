const e = require("express");
const Home = require("../models/home");// model import

exports.getAddHome = (req, res, next) => { //get request of add home
  res.render("host/edit-home", { title: "Add Home to Airbnb", currentPage: "add-home", editing: false });
};

exports.postAddHome = (req, res, next) => { // post request of add home
    const { houseName, price, location, rating, photoUrl } = req.body;
    const home = new Home(houseName, price, location, rating, photoUrl);
    home.save();
    res.render("host/home-added", { 
        title: "Home Added Successfully", 
        currentPage: "home-added",
     });
  }

  exports.getHomes = (req, res, next) => {// get request of home to show all the homes
   Home.fetchAll((homes) => {
      res.render("index", { 
          title: "Airbnb Home", 
          
          homes: homes,
   });
    
     });
  }

  exports.getHostHome = (req, res, next) => {// get request of home to show all the homes
    Home.fetchAll((homes) => {
       res.render("host/host-homes", { 
           title: "Host Home", 
           
           homes: homes,
    });
     
      });
   }
   exports.getEditHome = (req, res, next) => { //get request of add home
      const homeId = req.params.homeId ;
      const editing = req.query.editing === "true";
      if(!editing){
        return res.redirect("host/host-homes");
      }
      Home.findById(homeId, (home) => {
          if (!home) {
              console.log("Home not found");
              return res.redirect("/host/host-homes");
            }
            res.render("host/edit-home", { title: "Edit your Home to Airbnb", currentPage: "add-home", home: home, editing: editing });
      })

      
    }
    exports.postEditHome = (req, res, next) => {
      const { id, houseName, price, location, rating, photoUrl } = req.body;
      const newHome = new Home(houseName, price, location, rating, photoUrl);
      newHome.id = id;
      newHome.save((error) => {
        if (error) {
          console.log("Error while updating home", error);
        } else {
          res.redirect("/host/host-homes");
        }
      });
    }
    exports.postDeleteHome = (req, res, next) => {
      const homeId = req.params.homeId;
      Home.deleteById(homeId,error => {
        if (error) {
          console.log("Error while deleting home", error);
         }
         res.redirect("/host/host-homes");
        
      });
    }