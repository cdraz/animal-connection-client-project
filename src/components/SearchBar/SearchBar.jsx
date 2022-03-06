import React from 'react';
import { useDispatch } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch();
    const qFilter = {
        actFilter: "all",
        breed:'',
        minA: "",
        maxA: "",
        maxL: '',
        minL: '',
        maxH: '',
        minH: '',
        maxN: '',
        minN: '',
        maxB: '',
        minB: '',
        minW: '',
        maxW: '',
        type: '',
    };
    function filterAnimals(event){
        event.preventDefault();
        dispatch({
            type: "FILTER_ANIMALS",
            payload: qFilter,
        })
    }
    return (
        <div className="container">
            <form onSubmit={(evt) => filterAnimals(evt)}>
                <input 
                    onChange={(evt) => qFilter.actFilter = "all"} 
                    name="activeSelector" value="all" type="radio" 
                />
                <input 
                    onChange={(evt) => qFilter.actFilter = "active"} 
                    name="activeSelector" value="active" type="radio" 
                />
                <input 
                    onChange={(evt) => qFilter.actFilter = "inactive"} 
                    name="activeSelector" value="inactive" type="radio" 
                />
                <select onChange={(evt) => qFilter.breed = evt.target.value} name='type'>
                    <option value="type">Type</option>
                </select>
                <select onChange={(evt) => qFilter.breed = evt.target.value}>
                    <option value="breed">Breed</option>
                </select>
                <input 
                    onChange={(evt) => qFilter.minL = evt.target.value} 
                    type="number" placeholder='min length'
                />
                <input 
                    onChange={(evt) => qFilter.maxL = evt.target.value} 
                    type="number" placeholder='max length'
                />
                <input 
                    onChange={(evt) => qFilter.minH = evt.target.value} 
                    type="number" placeholder='min height'
                />
                <input 
                    onChange={(evt) => qFilter.maxH = evt.target.value} 
                    type="number" placeholder='max height'
                />
                <input 
                    onChange={(evt) => qFilter.minN = evt.target.value} 
                    type="number" placeholder='min neck'
                />
                <input 
                    onChange={(evt) => qFilter.maxN = evt.target.value} 
                    type="number" placeholder='max neck'
                />
                <input 
                    onChange={(evt) => qFilter.minB = evt.target.value} 
                    type="number" placeholder='min belly'
                />
                <input 
                    onChange={(evt) => qFilter.maxB = evt.target.value} 
                    type="number" placeholder='max belly'
                />
                <input 
                    onChange={(evt) => qFilter.minW = evt.target.value} 
                    type="number" placeholder='min weight'
                />
                <input 
                    onChange={(evt) => qFilter.maxW = evt.target.value}
                    type="number" placeholder='max weight'
                />
                <input 
                    onChange={(evt) => qFilter.minA = evt.target.value} 
                    type="date" 
                />
                <input 
                    onChange={(evt) => qFilter.maxA = evt.target.value} 
                    type="date" 
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default SearchBar;
