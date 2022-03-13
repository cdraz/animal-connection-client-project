import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function AnimalAuditionHistoryTable({ animal }) {

    // Store access
    const auditions = animal.auditions;

    // Dispatch hook
    const dispatch = useDispatch();

    // Set state variables for edit mode
    const [edit, setEdit] = useState(false);
    const [auditionInput, setAuditionInput] = useState('');

    // Declare addAudition
    const addAudition = () => {
        console.log('in addAudition');
    }

    // Declare handleDelete
    const handleDelete = (auditionId, animalsId) => {
        dispatch({
            type: 'DELETE_AUDITION',
            payload: {
                id: auditionId,
                animalsId: animalsId
            }
        })        
    }

    return (
        <>
            <div style={{ display: 'inline-flex' }}>
                <Typography variant="h5">
                    Audition History
                </Typography>
                {!edit &&
                    <Button
                        onClick={() => setEdit(!edit)}
                    >
                        Edit
                    </Button>
                }
                {edit &&
                    <>
                        <Button
                            variant="contained"
                            onClick={addAudition}
                        >
                            Add
                        </Button>
                        <Button
                            onClick={() => {
                                setEdit(!edit);
                            }}
                        >
                            Cancel
                        </Button>
                    </>
                }

            </div>
            <Stack direction="row" spacing={1}>
                {auditions[0] ? auditions.map(audition => (
                    <Chip key={audition.id} label={audition.date} onDelete={edit ? () => handleDelete(audition.id, audition.animalsId) : null } />
                ))
                    :
                    <Typography variant="p">
                        No auditions on record.
                    </Typography>
                }
            </Stack>

        </>
    )
}

export default AnimalAuditionHistoryTable;