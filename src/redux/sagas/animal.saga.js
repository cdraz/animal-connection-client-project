import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* filterAnimals(action) {
  const qFilter = action.payload;
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/animal`, { params: qFilter });
    yield put({ type: "SET_ANIMALS", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* fetchAnimals() {
  try {
    const response = yield axios.get(`/api/animal`);
    yield put({ type: "SET_ANIMALS", payload: response.data });
  } catch (error) {
    console.error("fetchAnimals failed", error);
  }
}

function* fetchSelectedAnimal(action) {
  try {
    const response = yield axios.get(`/api/animal/${action.payload.id}`);
    yield put({ type: "SET_SELECTED_ANIMAL", payload: response.data });
  } catch (error) {
    console.error("fetchSelectedAnimal failed", error);
  }
}

// Add an animal to a job
function* addAnimalToJob(action) {
  try {
    yield axios.post(`/api/animal/job`, action.payload);
    yield put({
      type: "FETCH_SELECTED_ANIMAL",
      payload: { id: action.payload.animalId },
    });
  } catch (error) {
    console.error("addAnimalToJob failed", error);
  }
}

// Update an animal's training info
function* updateAnimalTraining(action) {
  try {
    const response = yield axios.put(
      `/api/animal/${action.payload.id}/training`,
      action.payload
    );
    yield put({
      type: "FETCH_SELECTED_ANIMAL",
      payload: { id: action.payload.id },
    });
  } catch (error) {
    console.error("updateAnimalTraining failed", error);
  }
}

// Update an animal's summary info
function* updateAnimalSummary(action) {
  try {
    const response = yield axios.put(
      `/api/animal/${action.payload.id}/summary`,
      action.payload
    );
    yield put({
      type: "FETCH_SELECTED_ANIMAL",
      payload: { id: action.payload.id },
    });
  } catch (error) {
    console.error("updateAnimalTraining failed", error);
  }
}

function* addNewAnimal(action) {
  try {
    yield axios.post(`/api/animal`, action.payload.formData);
    yield put({ type: 'FETCH_SELECTED_CONTACT', payload: action.payload.id });
  } catch (error) {
    console.error("POST animal failed", error);
  }
}

// Delete an animal from the database
function* deleteAnimal(action) {
  try {
    const response = yield axios.delete(`/api/animal/${action.payload.id}`);
    yield put({ type: "FETCH_ANIMALS" });
  } catch (error) {
    console.error("deleteAnimal failed", error);
  }
}
function* animalSaga() {
  yield takeLatest("FILTER_ANIMALS", filterAnimals);
  yield takeLatest("FETCH_ANIMALS", fetchAnimals);
  yield takeLatest("FETCH_SELECTED_ANIMAL", fetchSelectedAnimal);
  yield takeLatest("ADD_ANIMAL_TO_JOB", addAnimalToJob);
  yield takeLatest("UPDATE_ANIMAL_TRAINING", updateAnimalTraining);
  yield takeLatest("UPDATE_ANIMAL_SUMMARY", updateAnimalSummary);
  yield takeLatest("ADD_NEW_ANIMAL", addNewAnimal);
  yield takeLatest("DELETE_ANIMAL", deleteAnimal);
}

export default animalSaga;
