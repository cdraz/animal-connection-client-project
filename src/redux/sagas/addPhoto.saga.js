import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addPhoto(action) {
  try {
   console.log('!$!$!PHOTO',action.payload.formData);
   
    yield axios.post("/api/images", action.payload.formData);


  } catch (error) {
    console.log("Add photo failed", error);
  }
}

function* addPhotoSaga() {
  yield takeLatest("SEND_FILE", addPhoto);
}

export default addPhotoSaga;
