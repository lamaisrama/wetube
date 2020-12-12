import routes from "../routes"
export const getJoin = (req, res) => {    
    res.render("join", {pageTitle : "JOIN"});
}

export const postJoin = (req, res) => {
    //console.log(req.body);
    const {
        body : { name, email, password, password2}
    } = req;
    if(password !== password2) {
        res.status(400); //bad request
        res.render("join", {pageTitle : "JOIN"});
    }else{
        //To do : Register user
        //To do : User Login
        res.redirect(routes.home);
    }
    
}

export const getLogin = (req, res) => res.render("login", {pageTitle : "LOG IN"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    //To do : process log out
    res.redirect(routes.home);
}

//export const users = (req, res) => res.render(routes.users);
export const userDetail = (req, res) => res.render("userDetail", {pageTitle : "USER DETAIL"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : "EDIT PROFILE"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle : "CHANGE PW"});