import React from "react";
import "./ContactTable.css"
import { useSelector } from "react-redux";


const contacts = () => {
    const contacts = useSelector((store) => store.contact);
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
                <tbody>
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