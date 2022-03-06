import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
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
        width: 300,
        minHeight: 400,
        maxHeight: 650,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll',
        padding: 3
    };

    return (
        <>
        <button onClick={() => console.log(animal)}>Log animal</button>
            {/* <Card key={animal.id} sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => {
                    setOpen(true);
                    console.log(details);
                }}>
                    <CardMedia
                        className="recipeImage"
                        component="img"
                        height="140"
                        image={recipe.strDrinkThumb}
                        alt={animal.name}
                    />
                    <CardContent>
                        <Typography gutterBottom noWrap variant="h6" component="div">
                            {recipe.strDrink}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Modal
                open={open}
            >
                <Box key={recipe.idDrink} sx={style}>
                    {
                        details.fullDetails ?
                            <Card sx={{ padding: 0, margin: 0, border: 'none', boxShadow: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    width="200"
                                    image={recipe.strDrinkThumb}
                                    alt={recipe.strDrink}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {details.fullDetails.strDrink}
                                    </Typography>
                                    <Grid container spacing={1} columns={3}>
                                        <Grid item>
                                            <Typography component="p">
                                                <ul>
                                                    {details.ingredients.map(ingredient => (
                                                        ingredient.i ?
                                                            <li key={ingredient.i} className={bar.some(barIngredient => barIngredient.apiString.toLowerCase() === ingredient.i.toLowerCase()) ? 'ownedIngredient' : 'unownedIngredient'}>
                                                                {ingredient.m + ' ' + ingredient.i}
                                                            </li>
                                                            : null
                                                    ))}
                                                </ul>
                                            </Typography>
                                            <Typography component="p">
                                                {details.fullDetails.strInstructions}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                {savedRecipes.some(savedRecipe => savedRecipe.idDrink === recipe.idDrink) ?
                                    <Button
                                        onClick={onRemove}
                                        variant="outlined"
                                    >
                                        Unsave
                                    </Button>
                                    :
                                    <Button
                                        onClick={onSave}
                                        variant="contained"
                                    >
                                        Save
                                    </Button>
                                }
                                <Button
                                    variant="text"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                                </CardActions>
                            </Card>
                : <CircularProgress />
                    }
            </Box>
        </Modal> */}
        </>
    )
};

export default AnimalCard;