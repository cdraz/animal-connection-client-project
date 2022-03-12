// MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function AnimalAuditionHistoryTable({ animal }) {

    const auditions = animal.auditions;

    let auditionList = '';

    if (auditions) {
        for (let audition of auditions) {
            if (audition) {
            auditionList += `${audition.date}, `
            } else {
                auditionList = 'No auditions on record.';
            }
        }
    };

    return (
        <>
            <Typography variant="h5">
                Audition History
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="audition history table">
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                {auditionList}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AnimalAuditionHistoryTable;