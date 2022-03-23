import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addPhoto(action) {
  try {
    yield axios.put("/api/images", action.payload.formData);
    yield put({
      type: "FETCH_SELECTED_ANIMAL",
      payload: { id: action.payload.animal.id },
    });
  } catch (error) {
    console.log("Add photo failed", error);
  }
}

function* addPhotoSaga() {
  yield takeLatest("SEND_FILE", addPhoto);
}

export default addPhotoSaga;
