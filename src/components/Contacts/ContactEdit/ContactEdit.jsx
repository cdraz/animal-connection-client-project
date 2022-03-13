import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function ContactEdit () {
    const history = useHistory();
    const dispatch = useDispatch();
    const contacts = useSelector (store => store.contacts) 

    useEffect (() => {
        dispatch ({
            type: 'FETCH_CONTACT'
        })
    }, [])

    const saveEdit = (event) => {
        event.preventDefault()
        dispatch ({
            type: 'SAVE_CONTACT_CHANGES',
            payload: contacts

        })
        // history.push('/contacts/')
    }



    return (
        <>
        <form onSubmit={saveEdit}>
        <div>
            <label htmlFor="firstName">
                First Name:
            <input
                type='text'
                name='firstName'
                value={contacts.firstName}
                required
                placeholder='First Name'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {firstName: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="lastName">
                Last Name:
            <input
                type='text'
                name='lastName'
                value={contacts.lastName}
                required
                placeholder='Last Name'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {lastName: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="primaryNumber">
                Primary Number:
            <input
                type='text'
                name='primaryNumber'
                value={contacts.primaryNumber}
                required
                placeholder='Primary Number'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {primaryNumber: evt.target.value}
                })}
            />    
                </label>
            </div>

            <div>
                <label htmlFor="secondaryNumber">
                Secondary Number:
            <input
                type='text'
                name='secondaryNumber'
                value={contacts.secondaryNumber}
                placeholder='SecondaryNumber'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {secondaryNumber: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="text">
                Text:
            <input
                type='text'
                name='text'
                value={contacts.text}
                required
                placeholder='Text'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {text: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="email">
                Email:
            <input
                type='email'
                name='email'
                value={contacts.email}
                required
                placeholder='Email'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {email: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="type">
                Type:
            <input
                type='text'
                name='type'
                value={contacts.type}
                required
                placeholder='Type'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {type: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="website">
                Website:
            <input
                type='text'
                name='website'
                value={contacts.website}
                placeholder='Website'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {website: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="address">
                Address:
            <input
                type='text'
                name='address'
                value={contacts.address}
                required
                placeholder='Address'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {address: evt.target.value}
                })}
            />    
            </label>
        </div>

        <div>
            <label htmlFor="notes">
                Notes:
            <input
                type='text'
                name='notes'
                value={contacts.notes}
                placeholder='Notes'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_CONTACTS',
                    payload: {notes: evt.target.value}
                })}
            />    
            </label>
        </div>
        
        <button>Submit</button>
        </form>
        </>
    )
};

export default ContactEdit;

