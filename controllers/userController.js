export const join = (req, res) => res.render("join", {pageTitle : "JOIN"});
export const login = (req, res) => res.render("login", {pageTitle : "LOG IN"});
export const logout = (req, res) => res.render("logout", {pageTitle : "LOG OUT"});

//export const users = (req, res) => res.render(routes.users);
export const userDetail = (req, res) => res.render("userDetail", {pageTitle : "USER DETAIL"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : "EDIT PROFILE"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle : "CHANGE PW"});