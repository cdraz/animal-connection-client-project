import React from "react";
import "./ContactTable.css"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const contacts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const contacts = useSelector((store) => store.contact);
    


    const handleSelectedContact = (contact) => {
        dispatch ({type: "SET_SELECTED_CONTACT", payload: contact});
        history.push("/contactDetail");
    }
    return (
        <div className="contact-container">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Primary Number</th>
                        {/* <th>Secondary Number</th> */}
                        <th>Text</th>
                        <th>Email</th>
                        <th>Type</th>
                        {/* <th>Website</th> */}
                        {/* <th>Address</th> */}
                        {/* <th>Notes</th> */}
                    </tr>
                </thead>
                <tbody onClick= {() => handleSelectedContact()}>

                    {contacts.length > 0 
                        ? contacts.map(contact => (
                            <tr>
                                <td>
                                    {contact.firstName}
                                </td>
                                <td>
                                    {contact.lastName}
                                </td>
                                <td>
                                    {contact.primaryNumber}
                                </td>
                                <td>
                                    {contact.text ? 'yes' : 'no'}
                                </td>
                                <td>
                                    {contact.email}
                                </td>
                                <td>
                                    {contact.type}
                                </td>
                            </tr>
                        ))
                        :console.log('loading...')}
                </tbody>
            </table>
        </div>
    )
}

export default contacts;