import React from "react";
import "./ContactTable.css"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const contacts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const contacts = useSelector((store) => store.contact);
    


    const handleSelectedContact = (id) => {
        dispatch ({type: "SET_SELECTED_CONTACT", payload: id});
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
                        <th>Secondary Number</th>
                        <th>Text</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Website</th>
                        <th>Address</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody  >

                    {contacts.length > 0 
                        ? contacts.map(contact => (
                            <tr onClick= {() => handleSelectedContact(contact.id)}>
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
                                    {contact.secondaryNumber}
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
                                <td>
                                    {contact.website}
                                </td>
                                <td>
                                    {contact.address}
                                </td>
                                <td>
                                    {contact.notes}
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