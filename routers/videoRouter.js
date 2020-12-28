import express from "express";
import { deleteVideo, getEditVideo, getUpload, postEdtiVideo, postUpload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();


//upload
videoRouter.get(routes.upload , getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload)

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEdtiVideo);

//Delete Video
videoRouter.get(routes.deleteVideo() , deleteVideo);

export default videoRouter;