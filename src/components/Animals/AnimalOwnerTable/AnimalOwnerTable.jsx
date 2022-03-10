import { Link } from 'react-router-dom';

// MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AnimalOwnerTable({ contact }) {

    return (
        <Link to={`/contacts/${contact.id}`} style={{ textDecoration: 'none' }}>
            <TableContainer component={Paper}>
                <Table aria-label="contact table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Owner Contact Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">
                                {contact.firstName} {contact.lastName}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                {contact.primaryNumber}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                {contact.email}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                {contact.address}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Link>
    )
}

export default AnimalOwnerTable;