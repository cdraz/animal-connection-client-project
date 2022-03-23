import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./AnimalForm.css";

// MUI imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";

//master list of dog breeds
import dogBreeds from "../DogBreedList";

function AnimalForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const types = useSelector((store) => store.animalTypes);
  const options = dogBreeds;
  // Get animal types from server on component load
  useEffect(() => {
    dispatch({
      type: "FETCH_ANIMAL_TYPES",
    });
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);

  //Event handlers
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [newAnimal, setNewAnimal] = useState({
    contactId: id,
    image: "", //needs an input box and setup with cloud server
    name: "",
    rating: 0,
    animalType: "",
    otherTypeDetail: "",
    breed: "",
    birthday: "",
    sex: "",
    weight: 0,
    height: 0,
    length: 0,
    neckGirth: 0,
    bellyGirth: 0,
    color: "",
    active: "",
    notes: "",
    sitOnLeash: false,
    sitOffLeash: false,
    downOnLeash: false,
    downOffLeash: false,
    standOnLeash: false,
    standOffLeash: false,
    barkOnCommand: false,
    holdItem: false,
    mark: false,
    loudNoiseLights: false,
    silentCommands: false,
    strangerHandle: false,
    strangerDress: false,
    offLeashTrained: false,
    goodAroundChildren: false,
    atDistanceFromTrainer: false,
    otherDogs: false,
    smallAnimals: false,
    loudNoiseLights: false,
    shortNotice: false,
    overnight: false,
    livesClose: false,
  });

  const handleChange = (event) => {
    setNewAnimal({ ...newAnimal, [event.target.name]: event.target.value });
    console.log(newAnimal);
  };
  const handleBoolChange = (event) => {
    newAnimal[event.target.name] = event.target.checked;
  };

  const submitNewAnimal = (evt) => {
    evt.preventDefault();

    //appending id,description and file to form Data to be sent over in an object with selected project
    //form data will be req.file and selected project will be req.body
    const formData = new FormData();
    for (let key in newAnimal) {
      formData.append(key, newAnimal[key]);
    }
    formData.append("selectedFile", selectedFile);

    let imageDataToSend = {
      formData: formData,
      id: { id },
    };

    dispatch({
      type: "ADD_NEW_ANIMAL",
      payload: imageDataToSend,
    });
    history.push(`/contacts/${id}`);
  };

  return (
    <div id="animalForm">
      <Typography variant="h1">
        Add New Animal
      </Typography>
      <form onSubmit={submitNewAnimal}>
        <FormControl sx={{ minWidth: "60%" }}>
          <Paper sx={{ padding: 3 }}>
            <Stack spacing={2}>
              <div id="ratingLabel">
                <Typography variant="h6">Rating: </Typography>
                <Rating
                  name="rating"
                  onChange={(event) => handleChange(event)}
                  sizeLarge
                  size="large"
                  sx={{ margin: "auto" }}
                  value={newAnimal.rating}
                />
              </div>
              <TextField
                required
                type="file"
                className="form-control-file"
                name="uploaded_file"
                onChange={handleFileSelect}
              />
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                required
                name="name"
                id="animal-name-input"
                label="Animal Name"
                onChange={(event) => handleChange(event)}
                value={newAnimal.name}
              />
              <Autocomplete
                name="type"
                options={types}
                getOptionLabel={(option) => option.type}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                filterSelectedOptions
                onChange={(evt, opt) => {
                  setNewAnimal({ ...newAnimal, animalType: opt.id });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Animal Type"
                    placeholder="Types"
                  />
                )}
              />
              {/* Show other animal type detail if type is other */}
              {newAnimal.animalType === 13 && (
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="otherTypeDetail"
                  id="animal-other-type-input"
                  label="Other Type Description"
                  onChange={(event) => handleChange(event)}
                />
              )}
              {newAnimal.animalType === 1 ? (
                <Autocomplete
                  name="breed"
                  options={options}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  onChange={(evt, opt) => {
                    setNewAnimal({ ...newAnimal, breed: opt.toLowerCase() });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Breed" placeholder="Breeds" />
                  )}
                />
              ) : (
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(evt) =>
                    setNewAnimal({ ...newAnimal, breed: evt.target.value })
                  }
                  type="text"
                  label="Breed"
                />
              )}
              {newAnimal.animalType === 1 && (
                <>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    type="date"
                    name="birthday"
                    id="animal-birthday-input"
                    label="Birthdate"
                    onChange={(event) => handleChange(event)}
                  />
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="sex"
                    id="animal-sex-input"
                    label="Sex"
                    onChange={(event) => handleChange(event)}
                    value={newAnimal.sex}
                  />
                  <div style={{ display: "inline-flex" }}>
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="height"
                      id="animal-height-input"
                      label="Height (in)"
                      onChange={(event) => handleChange(event)}
                      value={newAnimal.height}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="length"
                      id="animal-length-input"
                      label="Length (in)"
                      onChange={(event) => handleChange(event)}
                      value={newAnimal.length}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="bellyGirth"
                      id="animal-girth-input"
                      label="Girth (in)"
                      onChange={(event) => handleChange(event)}
                      value={newAnimal.bellyGirth}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="neckGirth"
                      id="animal-neck-input"
                      label="Neck (in)"
                      onChange={(event) => handleChange(event)}
                      value={newAnimal.neckGirth}
                    />
                  </div>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="weight"
                    id="animal-weight-input"
                    label="Weight (lbs)"
                    onChange={(event) => handleChange(event)}
                    value={newAnimal.weight}
                  />
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="color"
                    id="animal-color-input"
                    label="Color"
                    onChange={(event) => handleChange(event)}
                    value={newAnimal.color}
                  />
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    name="active"
                    id="animal-active-input"
                    label="Active"
                    onChange={(event) => handleChange(event)}
                    value={newAnimal.active}
                  />
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="notes"
                    id="animal-notes-input"
                    label="Notes"
                    onChange={(event) => handleChange(event)}
                    value={newAnimal.notes}
                  />
                </>
              )}
            </Stack>
          </Paper>

          {newAnimal.animalType === 1 && (
            <>
              <Paper>
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Stack spacing={0}>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="sitOnLeash"
                        />{" "}
                        Sit and stay on leash
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="sitOffLeash"
                        />{" "}
                        Sit and stay off leash
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="downOnLeash"
                        />{" "}
                        Down and stay on leash
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="downOffLeash"
                        />{" "}
                        Down and stay off leash
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="standOnLeash"
                        />{" "}
                        Stand and stay on leash
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="standOffLeash"
                        />{" "}
                        Stand and stay off leash
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="barkOnCommand"
                        />{" "}
                        Bark on cue
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="holdItem"
                        />{" "}
                        Hold and object
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="mark"
                        />{" "}
                        Move to a mark
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="silentCommands"
                        />{" "}
                        Can use silent commands
                      </div>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack spacing={0}>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          value
                          name="strangerHandle"
                        />{" "}
                        Can be handled by stranger
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="strangerDress"
                        />{" "}
                        Can be dressed by stranger
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="offLeashTrained"
                        />{" "}
                        Works well with children
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="goodAroundChildren"
                        />{" "}
                        Works well with children
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="otherDogs"
                        />{" "}
                        Works well with other dogs
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="smallAnimals"
                        />{" "}
                        Works well with other small animals
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="atDistanceFromTrainer"
                        />{" "}
                        Can work at a Distance from trainer
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="loudNoiseLights"
                        />{" "}
                        Afraid of strobes
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="shortNotice"
                        />{" "}
                        Available at short notice
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="overnight"
                        />{" "}
                        Available for overnight jobs
                      </div>
                      <div>
                        <Checkbox
                          onChange={(event) => handleBoolChange(event)}
                          name="livesClose"
                        />{" "}
                        Lives near by
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </>
          )}
          <Button type="submit">SUBMIT</Button>
        </FormControl>
      </form>
    </div>
  );
}

export default AnimalForm;
