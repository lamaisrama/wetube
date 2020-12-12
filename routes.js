//divide and conquer.
//하나의 source를 사용하고 싶다. 어디서든 사용가능한 URL을 모아놓겠다.

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USERS = "/users";
const USER_DETAIL ="/:id";  // express가 : 를 사용하면 변하는 값이 들어올 것을 인지함
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload"
const VIDEO_DETAIL ="/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : (id) => {
        if (id) {
            return `/users/${id}`
        }else{
            return USER_DETAIL
        }
    },
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : (id) => {
        if(id){
            return `/videos/${id}`;
        }else {
            return VIDEO_DETAIL;
        }
    },
    editVideo : EDIT_VIDEO,
    deleteVideo : DELETE_VIDEO
}

export default routes;
