import routes from "../routes"
import Video from "../models/Video"

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }); // video 찾은 후 정렬하겠다. id를 기준으로
    res.render("home", { pageTitle: "HOME", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "HOME", videos: [] });
  }
}; // render 함수가 views 폴더에서 파일명이 home이고 확장자가 pug인 탬플릿 파일 찾은 후 보여줄 것
export const search = async(req, res) => {
  // const searchingBy = req.query.term // ES6 이전의 코딩 방법
  const {
    query: { term: searchingBy },
  } = req;
  let videos =[];
  try{
    videos = await Video.find({title: {$regex: searchingBy, $options: "i"}})
  }catch(error){
    console.log(error)
  }
  res.render("search", {pageTitle: "Search", searchingBy, videos});
};
// export const videos = (req, res) => res.send("Videos");
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  // To do : Upload and save video
  // console.log(body, file);
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  // get the video
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    console.log("=============");
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEdtiVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// res.render("deleteVideo", {pageTitle : "Delete Video"});
