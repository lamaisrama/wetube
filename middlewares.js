import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next(); // middleware, next req로 넘겨주어야 함.
};

export const uploadVideo = multerVideo.single("videoFile"); //single은 하나만 업로드할 수 있다는 뜻
