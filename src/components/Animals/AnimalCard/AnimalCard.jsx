import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

// React components
import AnimalSummary from "../AnimalSummary/AnimalSummary";
import AnimalWorkHistoryTable from "../AnimalWorkHistoryTable/AnimalWorkHistoryTable";
import AnimalBehaviorTrainingTable from "../AnimalBehaviorTrainingTable/AnimalBehaviorTrainingTable";

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function AnimalCard({ animal }) {
  // Dispatch hook
  const dispatch = useDispatch();

  //  MUI modal setup for detail view
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // Modal style setup
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "80%",
    height: "80%",
    p: 4,
    overflow: "scroll",
    padding: 3,
  };

    return (
        <Card key={animal.id} sx={{ maxWidth: 345 }}>
            <Link to={`/animals/${animal.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={animal.image}
                        alt={animal.name}
                    />
                    <CardContent>
                        <Typography gutterBottom noWrap variant="h6" component="div">
                            {animal.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
};

export default AnimalCard;
