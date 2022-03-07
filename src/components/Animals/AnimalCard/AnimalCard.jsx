import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// React components
import AnimalSummary from '../AnimalSummary/AnimalSummary';
import AnimalWorkHistoryTable from '../AnimalWorkHistoryTable/AnimalWorkHistoryTable';
import AnimalBehaviorTrainingTable from '../AnimalBehaviorTrainingTable/AnimalBehaviorTrainingTable';

// MUI imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

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
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        width: '80%',
        height: '80%',
        p: 4,
        overflow: 'scroll',
        padding: 3
    };

    return (
        <>
            <Card key={animal.id} sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => {
                    setOpen(true);
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg"
                        alt={animal.name}
                    />
                    <CardContent>
                        <Typography gutterBottom noWrap variant="h6" component="div">
                            {animal.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box key={animal.id} sx={style}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                <AnimalSummary animal={animal} />
                            </Stack>
                        </Grid>
                        <Grid item xs={8}>
                            <Stack spacing={2}>
                                <Typography variant="h5">
                                    Work History
                                </Typography>
                                <AnimalWorkHistoryTable animal={animal} />
                                {
                                    // If animalType is dog, show behavior/training (we only track this for dogs)
                                    animal.animalType.toLowerCase() === 'dog' ?
                                        <>
                                            <Typography variant="h5">
                                                Behavior, Training, Availability
                                            </Typography>
                                            <AnimalBehaviorTrainingTable animal={animal} />
                                        </>
                                        : null
                                }

                                <Button variant="contained">Add to Job</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
};

export default AnimalCard;