import routes from "../routes"
import Video from "../models/Video";


export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        console.log(videos);
        res.render("home", {pageTitle : "HOME", videos} );
    }catch(error){
        console.log(error);
        res.render("home", {pageTitle : "HOME", videos : []} );
    }

} //render 함수가 views 폴더에서 파일명이 home이고 확장자가 pug인 탬플릿 파일 찾은 후 보여줄 것
export const search = (req, res) => {

    //const searchingBy = req.query.term // ES6 이전의 코딩 방법
    const{
        query : { term: searchingBy } 
    } = req;

    res.render("search", {pageTitle : "Search", searchingBy : searchingBy, videos}); 


}
//export const videos = (req, res) => res.send("Videos");
export const getUpload = (req, res) => res.render("upload", {pageTitle : "Upload"});
export const postUpload = (req, res) => {
    console.log(req.body);
    const {
        body : {
            file, title, description
        }
    } = req;
    //To do : Upload and save video
    res.redirect(routes.videoDetail(32423));

}
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "Video Detail"} );
export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "Delete Video"});