import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/pe/auth/";


class UserService {
    

    createUser(user){
        
        return axios.post(USER_BASE_REST_API_URL+"register", user)
          
    }

    loginUser(user){
        
        return axios.post(USER_BASE_REST_API_URL+"authenticate", user)
          
    }


   
  
}

export default new UserService();