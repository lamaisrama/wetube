import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEdtiVideo,
  postUpload,
  videoDetail,
} from "../controllers/videoController";
import routes from "../routes";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEdtiVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
