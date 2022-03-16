import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const animal = useSelector((store) => store.selectedAnimal);

  //Event handlers
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log();
  };


  //handing submit of form and file upload
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("SELECTED FILE IS", selectedFile);
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);

    let csvFile = {
      formData: formData,
      animal: animal,
    };

    dispatch({
      type: "UPLOAD_CSV",
      payload: csvFile,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            name="uploaded_file"
            onChange={handleFileSelect}
          />
            <button
              id="photoSubmit"
              type="submit"
              value="Add new Photo"
              variant="contained"
            >
              Add Photo
            </button>
        </div>
      </form>
    </>
  );
}

export default InfoPage;
