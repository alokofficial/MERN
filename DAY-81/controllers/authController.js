exports.getLogin = (req, res, next) => {
    res.render("auth/login", { pageTitle: "Login",isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
    const {username, password} = req.body;
    if(username === "admin" && password === "admin") {
        res.cookie("isLoggedIn", true);
    res.redirect("/");}
    else{
        res.redirect("/login");}
};
exports.postLogout = (req, res, next) => {
    res.cookie('isLoggedIn', false);
    res.redirect('/login');
};