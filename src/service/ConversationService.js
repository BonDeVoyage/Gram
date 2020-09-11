import axios from 'axios'

const API_CONVERSATION_URL = "https://localhost:5001/api/conversation"

class ConversationService {

    msgSend(id,msgtext){
		const msg = {text:msgtext};
        return axios.post(API_CONVERSATION_URL + "/" + id + "/send",JSON.stringify(msg),{
            headers: {
                'Content-type': 'application/json'
            },
			withCredentials: true
        })
    }
}

export default new ConversationService();