import React from 'react';
import { useDispatch } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch();
    const filter = {};
    function filterAnimals(event){
        event.preventDefault();
        console.log(filter);
        dispatch({
            type: "FILTER_ANIMALS",
            action: filter,
        })
    }
    return (
        <div className="container">
            <form onSubmit={(evt) => filterAnimals(evt)}>
                <input onChange={(evt) => filter.isActive = evt.target.checked} type="checkbox" /><p>is active?</p>
                <input onChange={(evt) => filter.isInactive = evt.target.checked} type="checkbox" /><p>is inactive?</p>
                <select onChange={(evt) => filter.breed = evt.target.value} name='type'>
                    <option value="type">Type</option>
                </select>
                <select onChange={(evt) => filter.breed = evt.target.value}>
                    <option value="breed">Breed</option>
                </select>
                <input onChange={(evt) => filter.minD = evt.target.value} type="number" placeholder='min dimensions'/>
                <input onChange={(evt) => filter.maxD = evt.target.value} type="number" placeholder='max dimensions'/>
                <input onChange={(evt) => filter.minW = evt.target.value} type="number" placeholder='min weight'/>
                <input onChange={(evt) => filter.maxW = evt.target.value}type="number" placeholder='max weight'/>
                <input onChange={(evt) => filter.audition = evt.target.value} type="date" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default SearchBar;
