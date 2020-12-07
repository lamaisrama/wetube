import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";   
    res.locals.routes = routes;
    next(); // middleware, next req로 넘겨주어야 함.
}