
import React, { useState , useContext} from 'react';
import ContactService from '../services/ContactService';
import { AuthenticationContext } from '../Contexts/AuthenticationContext';
import { useParams} from "react-router-dom";

export const AddContact = () => {
    // const [id, setID] = useState(0)
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const {id} = useParams();
    const {token} = useContext(AuthenticationContext);

 

    const title = () => {
        if(id){
            return <h2 className='text-center text-dark'>Update contact</h2>
        }else{
            return <h2 className='text-center text-dark'>add contact</h2>
        }
    }
    const saveOrUpdateContact = async () => {
      

        
        const contact = {
             "id":0,username, address, imageUrl:imgUrl
        }
        
        if(id){
            ContactService.updateEmployee(id, contact, token).then((response)=>{
                console.log(response.data);
    
            }).catch((e)=>{
                console.log(e)
            })
        }else{
            ContactService.createContact(contact, token).then((response) =>{

                console.log(response.data);
    
                
    
            }).catch(error => {
              console.log(error)
            })
        }
        


        
        

    }


    return (
        <div className='w-75'>
            <br />
            
            <div className='container '>
                <div className='row'>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {   <div>
                                <br />
                                {title()}
                            </div>
                        }
                        <div className='card-body'>
                        <form action="/contacts">
                            <div className = "form-group mb-2">
                                <label className = "form-label"> Username:</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter username"
                                    name = "firstName"
                                    className = "form-control"
                                    value = {username}
                                    onChange = {(e) => setUsername(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Address :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter address"
                                    name = "address"
                                    className = "form-control"
                                    value = {address}
                                    onChange = {(e) => setAddress(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Img-url :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Img-url"
                                    name = "img-url"
                                    className = "form-control"
                                    value = {imgUrl}
                                    onChange = {(e) => setImgUrl(e.target.value)}
                                >
                                </input>
                            </div>

                            {/* <button className = "mx-auto btn btn-success" onClick = {(e) => }  
                            onSubmit={() => { navigate('/contacts');}} >Submit </button> */}
                        
                            <a className = "mx-auto btn btn-success" href='/contacts' onClick={saveOrUpdateContact}>
                            Submit
                            </a>
                            {/* <button className = "btn btn-success" >Submit </button> */}
                            

                            <a href='/contacts' className="mx-auto btn btn-danger" >Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
