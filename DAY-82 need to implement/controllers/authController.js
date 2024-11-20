exports.getLogin = (req, res, next) => {
    res.render("auth/login", { pageTitle: "Login",isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
    const {username, password} = req.body;
    if(username === "a" && password === "a") {
        req.session.isLoggedIn = true;
        
    res.redirect("/");}
    else{
        res.redirect("/login");}
};
exports.postLogout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/login');
};
exports.getSignup = (req, res, next) => {
    res.render("auth/signup", { pageTitle: "Signup",isLoggedIn: false });
};

exports.postSignup = (req, res, next) => {
    const {username, password} = req.body;
    res.redirect("/login");
};
