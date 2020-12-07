export const home = (req, res) => res.render("home", {pageTitle : "HOME"});
//render 함수가 views 폴더에서 파일명이 home이고 확장자가 pug인 탬플릿 파일 찾은 후 보여줄 것
export const search = (req, res) => {

    //const searchingBy = req.query.term // ES6 이전의 코딩 방법
    const{
        query : { term: searchingBy } 
    } = req;

    res.render("search", {pageTitle : "Search", searchingBy : searchingBy}); 


}
//export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload", {pageTitle : "Upload"});
export const videoDetail = (req, res) => res.send("Video Detail", {pageTitle : "Video Detail"} );
export const editVideo = (req, res) => res.send("Edit Video", {pageTitle : "Edit Video"});
export const deleteVideo = (req, res) => res.send("Delete Video", {pageTitle : "Delete Video"});