// Function imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// React components
import JobCard from '../JobCard/JobCard';
import JobSearchBar from '../../SearchBar/JobSearchBar'

function JobPage() {

    // Dispatch hook, store access
    const dispatch = useDispatch();
    const jobs = useSelector(store => store.jobs);

    useEffect(() => {
        dispatch({ type: 'FETCH_JOBS' });
    }, []);


    return(
        <>
        <JobSearchBar />
        {Array.isArray(jobs) ?
            jobs.map( job => (
            <JobCard job={job} />
        )) : <p>Loading...</p>}
        </>
    )
}

export default JobPage;