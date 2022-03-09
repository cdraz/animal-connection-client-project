import React from "react";
import "./ContactTable.css"

const contacts = () => {
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
                
            </table>
        </div>
    )
}

export default contacts;