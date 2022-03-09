// MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AnimalWorkHistoryTable({ animal }) {

    const jobs = animal.jobs;

    return (
        <TableContainer component={Paper}>
            <Table aria-label="work history table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Client</TableCell>
                        <TableCell align="left">Job No.</TableCell>
                        <TableCell align="left">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* TODO: make the table row a link to the job detail when jobs are set up */}
                    {jobs ? jobs.map( job => (
                        <TableRow
                            key={job.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                {job.date}
                            </TableCell>
                            <TableCell align="left">
                                {job.client}
                            </TableCell>
                            <TableCell align="left">
                                {job.number}
                            </TableCell>
                            <TableCell align="left">
                                {job.description}
                            </TableCell>
                        </TableRow>
                    )) : 'Loading jobs...'}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnimalWorkHistoryTable;