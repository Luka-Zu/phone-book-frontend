import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthenticationContext } from '../Contexts/AuthenticationContext'
 

import ContactService from '../services/ContactService'

const ContactList = () => {
    const [contacts, setContacts] = useState([])
    const {token} = useContext(AuthenticationContext);

    

    useEffect(() => {
      getAllContact();
    }, [])

    const getAllContact = () => {
        ContactService.getAllContacts().then((response) => {

            setContacts(response.data);
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          })
    }

    const deleteContact = (contactId) => {
        ContactService.deleteContact(contactId, token).then((response)=>{
            console.log(response);
            getAllContact();
        }).catch((e)=>{
            console.log(e);
        })
    }
    

    return (
        <div className='container'>
            <br /><br />
            <h2 className='text-center'> List contacts </h2>
            
             
             <Link href="/add-contact" className = "btn btn-dark mb-2" to = "/add-contact">
                Add contact
             </Link>
             <br />
             <br />
            <table className="table table-bordered table-stripped">
                <thead>
                    <th>Contact picture</th>
                    <th>id</th>
                    <th>Contact name</th>
                    <th>Contact Addres</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        contacts.sort((a, b) => a.username > b.username ? 1 : -1).map(
                            contact => 
                            <tr key={contact.id}>
                                <td className="table-sm"><img src={contact.imageUrl} alt="no img" width="50" height="50" /></td>
                                <td>{contact.id}</td>
                                <td>{contact.username}</td>
                                <td>{contact.address}</td>
                                <td>
                                    <Link className='btn btn-dark' to={`/edit-contact/${contact.id}`} >update</Link>
                                    <button className='btn btn-danger' onClick={() => deleteContact(contact.id)}
                                    style={{marginLeft:"10px"}}>delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
} 

export default ContactList;