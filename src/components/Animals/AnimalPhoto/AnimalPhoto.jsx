import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { useParams } from "react-router-dom";

const ProjectGalleryForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = useState(null);
  const animal = useSelector((store) => store.selectedAnimal);

  //Event handlers
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //handing submit of form and file upload
  async function handleSubmit(event) {
    event.preventDefault();
    //appending id,description and file to form Data to be sent over in an object with selected project
    //form data will be req.file and selected project will be req.body
    const formData = new FormData();
    formData.append("id", id);
    // formData.append("description", selectedDescription);
    formData.append("selectedFile", selectedFile);

    let imageDataToSend = {
      formData: formData,
      animal: animal,
    };

    dispatch({
      type: "SEND_FILE",
      payload: imageDataToSend,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Button
            id="photoSubmit"
            type="submit"
            value="Add new Photo"
            variant="outlined"
          >
            Change Photo
          </Button>
          <input
            type="file"
            className="form-control-file"
            name="uploaded_file"
            onChange={handleFileSelect}
            required
          />
        </Stack>
      </form>
    </>
  );
};

export default ProjectGalleryForm;
