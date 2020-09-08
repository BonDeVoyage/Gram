import axios from 'axios'


const API_USER_URL = "https://localhost:5001/api/user"

class UserService {

    getUserById(id){
        return axios.get(API_USER_URL + "/" + id);
    }
	
	getCurrentUser(){
		return axios.get(API_USER_URL + "/GetCurrentUser",{
			withCredentials: true
		});
	}

    createUser(user){
        return axios.post(API_USER_URL + "/register",user,{
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    loginUser(user){
        return axios.post(API_USER_URL + "/login",user,{
            headers: {
                'Content-type': 'application/json'
            },
			withCredentials: true
        })
    }
}


export default new UserService();