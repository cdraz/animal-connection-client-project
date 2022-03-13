import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* filterJobs(action) {
  const thing = action.payload;
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/job`, { params: thing }); //<<<<<<<<<<<<<<<<<<<<<<<<<issue?
    yield put({ type: "SET_JOBS", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* fetchJobs() {
  try {
    const response = yield axios.get(`/api/job`);
    yield put({ type: "SET_JOBS", payload: response.data });
  } catch (error) {
    console.error("fetchJobs failed", error);
  }
}

function* addJob(action) {
  try {
    console.log("job post action.payload", action.payload);

    const response = yield axios.post(`/api/job`, action.payload);
    yield put({ type: "FETCH_JOBS" });
  } catch (error) {
    console.error("fetchJobs failed", error);
  }
}

function* fetchJobDetails(action) {
  try {
    console.log("@#@#@$$@$##fetch job detail", action.payload);

    const response = yield axios.get(`/api/job/${action.payload}`);
    console.log(
      "response.data for set selected job details is ",
      response.data
    );

    yield put({ type: "SET_SELECTED_JOB_DETAILS", payload: response.data }); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  } catch (error) {
    console.error("fetchJobDetails failed", error);
  }
}

function* deleteJob(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // send the action.payload as the params
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.delete(`/api/job/${action.payload}`, config);
  } catch (error) {
    console.log("DELETE Job failed", error);
  }
}

function* finishJob(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // send the action.payload as the params
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.put(`/api/job/${action.payload}`, config);
  } catch (error) {
    console.log("FINISH Job failed", error);
  }
}
//edit job details
function* editSelectedJob(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    //send action.payload.project as params
    yield axios.put(
      `/api/job/edit/${action.payload.selectedJob}`,
      action.payload,
      config
    );
    yield put({ type: "FETCH_SELECTED_JOB", payload: action.payload.id });
  } catch (error) {
    console.log("CHANGE TITLE failed", error);
  }
}
//edit selected job pay
function* editSelectedJobPay(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    //send action.payload.project as params
    yield axios.put(
      `/api/job/edit/pay/${action.payload.payDetails}`,
      action.payload,
      config
    );
    yield put({ type: "FETCH_JOB_DETAILS", payload: action.payload.id });
  } catch (error) {
    console.log("CHANGE TITLE failed", error);
  }
}

function* fetchActiveJobs() {
  try {
    const response = yield axios.get("/api/activejob");
    yield put({ type: "SET_ACTIVE_JOBS", payload: response.data });
  } catch (error) {
    console.error("fetchActiveJobs failed", error);
  }
}

function* fetchSelectedJob(action) {
  try {
    console.log("we are in fetchSelected saga", action.payload);

    const response = yield axios.get(`/api/job/selectedJob/${action.payload}`);
    console.log("what is set selected job response.data", response.data);

    yield put({ type: "SET_SELECTED_JOB", payload: response.data[0] });
  } catch (error) {
    console.error("fetchJobs failed", error);
  }
}

function* deleteJobPet(action) {
  try {
    console.log(
      "deleteJob pet action",
      action.payload.payDetail,
      "from job",
      action.payload.selectedJob
    );

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // send the action.payload as the params
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.delete(`/api/job/pet/${action.payload.payDetail}`);
    yield put({
      type: "FETCH_JOB_DETAILS",
      payload: action.payload.selectedJob,
    });
  } catch (error) {
    console.log("DELETE Job failed", error);
  }
}

function* jobSaga() {
  yield takeLatest("FILTER_JOBS", filterJobs);
  yield takeLatest("FETCH_JOBS", fetchJobs);
  yield takeLatest("FETCH_ACTIVE_JOBS", fetchActiveJobs);
  yield takeLatest("FETCH_SELECTED_JOB", fetchSelectedJob);
  yield takeLatest("FETCH_JOB_DETAILS", fetchJobDetails);
  yield takeLatest("ADD_JOB", addJob);
  yield takeLatest("DELETE_JOB", deleteJob);
  yield takeLatest("DELETE_JOB_PET", deleteJobPet);
  yield takeLatest("FINISH_JOB", finishJob);
  yield takeLatest("EDIT_SELECTED_JOB", editSelectedJob);
  yield takeLatest("EDIT_SELECTED_JOB_PAY", editSelectedJobPay);
}

export default jobSaga;
