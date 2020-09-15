import axios from 'axios'

const API_CONVERSATION_URL = "https://localhost:5001/api/conversation"

class ConversationService {

    msgSend(id,msgtext){
		const msg = {text:msgtext};
        return axios.post(API_CONVERSATION_URL + "/" + id + "/send",msg,{
            headers: {
                'Content-type': 'application/json'
            },
			withCredentials: true
        })
    }

    createConversation(receiverId){
       return axios.get(API_CONVERSATION_URL + "/create/" + receiverId,{
			withCredentials: true
	   });
    }
}

export default new ConversationService();