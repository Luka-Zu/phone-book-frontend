import axios from "axios";


const CONTACT_BASE_REST_API_URL_PUBLIC = "http://localhost:8080/contacts/public/";
const CONTACT_BASE_REST_API_URL_PRIVATE = "http://localhost:8080/contacts/private";

// const CONTACT_BASE_REST_API_URL_PUBLIC_SEARCH = `${CONTACT_BASE_REST_API_URL_PUBLIC}byName/`


class ContactService {
    getAllContacts(){
        return axios.get(CONTACT_BASE_REST_API_URL_PUBLIC)
    }

    getContactByName(name){
        console.log(name);
        return axios.get("http://localhost:8080/contacts/public/byName/"+name);
    }
    
    createContact(contact, token){
        var config = {
            headers: {  'Authorization': `Bearer ${token}` }
        };
        return axios.post(CONTACT_BASE_REST_API_URL_PRIVATE, contact, config)
          
    }

    getContactById(id){
        return axios.get(CONTACT_BASE_REST_API_URL_PUBLIC+`${id}`)
    }

    updateEmployee(id, contact, token){
        var config = {
            headers: {  'Authorization': `Bearer ${token}` }
        };
        
        return axios.put(CONTACT_BASE_REST_API_URL_PRIVATE+`/${id}`, contact, config)
    }

    deleteContact(id, token){
       
        var config = {
            headers: {  'Authorization': `Bearer ${token}` }
        };
    
        return axios.delete(CONTACT_BASE_REST_API_URL_PRIVATE+`/${id}`, config)
    }
  
}

export default new ContactService();