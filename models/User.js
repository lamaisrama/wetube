import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  //id: String,       //social id를 저장하기 위한 필드 - 이런 계정은 비밀번호가 없을 것
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" }); // option을 넣을 수 있음. usernameField 사용

const model = mongoose.model("User", UserSchema);

export default model;
