// MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AnimalAuditionHistoryTable({ animal }) {

    const auditions = [];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="audition history table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* TODO: make the table row a link to the job detail when jobs are set up */}
                    {auditions.map( audition => (
                        <TableRow
                            key={audition.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                {audition.date}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnimalAuditionHistoryTable;