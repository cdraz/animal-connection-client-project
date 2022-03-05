import React from 'react';
import { useDispatch } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch();
    const filter = {
        actFilter: "all",
        breed:'',
        maxD: '',
        maxW: '',
        minD: '',
        minW: '',
        type: '',
    };
    function filterAnimals(event){
        event.preventDefault();
        console.log(filter);
        dispatch({
            type: "FILTER_ANIMALS",
            payload: filter,
        })
    }
    return (
        <div className="container">
            <form onSubmit={(evt) => filterAnimals(evt)}>
                <input 
                    onChange={(evt) => filter.actFilter = "all"} 
                    name="activeSelector" value="all" type="radio" 
                />
                <input 
                    onChange={(evt) => filter.actFilter = "active"} 
                    name="activeSelector" value="active" type="radio" 
                />
                <input 
                    onChange={(evt) => filter.actFilter = "inactive"} 
                    name="activeSelector" value="inactive" type="radio" 
                />
                <select onChange={(evt) => filter.breed = evt.target.value} name='type'>
                    <option value="type">Type</option>
                </select>
                <select onChange={(evt) => filter.breed = evt.target.value}>
                    <option value="breed">Breed</option>
                </select>
                <input 
                    onChange={(evt) => filter.minD = evt.target.value} 
                    type="number" placeholder='min dimensions'
                />
                <input 
                    onChange={(evt) => filter.maxD = evt.target.value} 
                    type="number" placeholder='max dimensions'
                />
                <input 
                    onChange={(evt) => filter.minW = evt.target.value} 
                    type="number" placeholder='min weight'
                />
                <input 
                    onChange={(evt) => filter.maxW = evt.target.value}
                    type="number" placeholder='max weight'
                />
                <input 
                    onChange={(evt) => filter.audition = evt.target.value} 
                    type="date" 
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default SearchBar;
