import mongoose from "mongoose";

const VideoSchema  = new mongoose.Schema({
    fileUrl: {
        type : String,
        required : 'File URL is required' //만약 없을 시 error message 넣기
    },

    title : {
        type : String,
        required : "Title is required"
    },
    description : {
        type : String
    },
    views : {
        type : Number,
        default : 0
    },
    createAt : {
        type : Date,
        default : Date.now 
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
});

const model = mongoose.model("Video", VideoSchema);

export default model;