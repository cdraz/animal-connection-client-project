// MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function AnimalDescriptionTable({ animal }) {

    // TODO: Calculate animal age
    let age = 2

    return (
        <>
            <img
                width="auto"
                src="https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg"
            />
            <Typography variant="h3">
                {animal.name}
            </Typography>
            <Rating value={animal.rating} />
            <TableContainer component={Paper}>
                <Table aria-label="training table">
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">
                                Type: {animal.animalType}
                            </TableCell>
                            {/* Show other animal type detail if type is other */}
                            {animal.animalType.toLowerCase() === 'other' ?
                                <TableCell align="left">
                                    Other type: {animal.otherTypeDetail}
                                </TableCell>
                                : null}
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                Breed: {animal.breed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                Age: {age}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                Sex: {animal.sex}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                H {animal.height} L {animal.length} G {animal.bellyGirth} N {animal.neckGirth}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                {animal.weight} lbs
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                Color: {animal.color}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                {animal.active ? 'Active' : 'Inactive'}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AnimalDescriptionTable;