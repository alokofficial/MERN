const registeredHomes = [];
exports.getAddHome = (req, res, next) => {
  res.render("add-home", { title: "Add Home", currentPage: "add-home" });
};

exports.postAddHome = (req, res, next) => {
    console.log('home registered successfully', req.body)
    registeredHomes.push(req.body);
    res.render("home-added", { 
        title: "Home Added Successfully", 
        currentPage: "home-added",
        registeredHomes: registeredHomes,
     });
  }

  exports.getHomes = (req, res, next) => {
    console.log(registeredHomes);
    res.render("index", { 
        title: "Airbnb Home", 
        currentPage: "index",
        registeredHomes: registeredHomes,
     });
  }