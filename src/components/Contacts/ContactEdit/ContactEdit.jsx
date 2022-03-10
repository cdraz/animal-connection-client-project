import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function ContactEdit () {
    const dispatch = useDispatch();

    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        primaryNumber: '',
        secondaryNumber: '',
        text: '',
        email: '',
        type: '',
        website: '',
        address: '',
        notes: ''
    })
    const createContactInfo = (event) => {
        event.preventDefault();

        dispatch({
            type: 'FETCH_CONTACT_DETAILS',
            payload: contactInfo
        })
    }

    const handleChange = (evt, property) => {
        console.log(property);
        setContactInfo({...contactInfo, [property]: evt.target.value})
    }


    return(
        <>
        <form onSubmit={createContactInfo}>
        <div>
            <label htmlFor="firstName">
                First Name:
            <input
                type='text'
                name='firstName'
                value={contactInfo.firstName}
                required
                placeholder='First Name'
                onChange={(evt) => handleChange (evt, "firstName")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="lastName">
                Last Name:
            <input
                type='text'
                name='lastName'
                value={contactInfo.lastName}
                required
                placeholder='Last Name'
                onChange={(evt) => handleChange (evt, "lastName")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="primaryNumber">
                Primary Number:
            <input
                type='text'
                name='primaryNumber'
                value={contactInfo.primaryNumber}
                required
                placeholder='Primary Number'
                onChange={(evt) => handleChange (evt, "primaryNumber")}
            />    
             </label>
         </div>
         <div>
             <label htmlFor="secondaryNumber">
                Secondary Number:
            <input
                type='text'
                name='secondaryNumber'
                value={contactInfo.secondaryNumber}
                required
                placeholder='SecondaryNumber'
                onChange={(evt) => handleChange (evt, "secondaryNumber")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="text">
                Text:
            <input
                type='text'
                name='text'
                value={contactInfo.text}
                required
                placeholder='Text'
                onChange={(evt) => handleChange (evt, "text")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="email">
                Email:
            <input
                type='email'
                name='email'
                value={contactInfo.email}
                required
                placeholder='Email'
                onChange={(evt) => handleChange (evt, "email")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="type">
                Type:
            <input
                type='text'
                name='type'
                value={contactInfo.type}
                required
                placeholder='Type'
                onChange={(evt) => handleChange (evt, "type")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="website">
                Website:
            <input
                type='text'
                name='website'
                value={contactInfo.website}
                required
                placeholder='Website'
                onChange={(evt) => handleChange (evt, "website")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="address">
                Address:
            <input
                type='text'
                name='address'
                value={contactInfo.address}
                required
                placeholder='Address'
                onChange={(evt) => handleChange (evt, "address")}
            />    
             </label>
         </div>

         <div>
             <label htmlFor="notes">
                Notes:
            <input
                type='text'
                name='notes'
                value={contactInfo.notes}
                required
                placeholder='Notes'
                onChange={(evt) => handleChange (evt, "notes")}
            />    
             </label>
         </div>
         
         <button type="submit">Enter</button>
        </form>


        </>
    )
}

export default ContactEdit;