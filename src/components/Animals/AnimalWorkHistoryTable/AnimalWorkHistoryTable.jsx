import { Link, useHistory } from 'react-router-dom';
import './AnimalWorkHistoryTable.css';

// MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AnimalWorkHistoryTable({ animal }) {

    // History hook
    const history = useHistory();

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
                    {jobs ? jobs.map(job => (
                        job.date ?
                            <TableRow key={job.id} className="jobRow" onClick={() => history.push(`/jobDetail/${job.id}`)}>
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
                            : null)) : <TableRow><TableCell>'No job history.'</TableCell></TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnimalWorkHistoryTable;