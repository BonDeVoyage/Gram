import React, {Component} from 'react';
import ConversationService from "../service/ConversationService";
import UserService from "../service/UserService";
import '../styles/Messageinput.css';

class MessageInput extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			conversationId:this.props.conversation['id'],
			msgtext:""
		}
	}
	
	onTextChanged = (e) =>
	{
		this.setState({msgtext: e.target.value});
	}		
	
	componentDidUpdate(prevProps)
	{
		if(this.props.conversation['id'] !== prevProps.conversation['id'])
		{
			this.setState({conversationId:this.props.conversation['id']});
		}
	}
	
	onMsgSend = (e) =>
	{
		e.preventDefault();
		ConversationService.msgSend(this.state.conversationId,this.state.msgtext).then(()=>
		{		
			UserService.getCurrentUserConversations().then((res) => {
				this.setState({msgtext: ""});
			})
		});
	}
	
    render() {
        return (
            <div className=" w-100 h-100 border-0 MessageInput m-0 justify-content-center align-items-center">
				<form onSubmit={this.onMsgSend}  className="row m-0 w-100 h-100 p-4 ">
					<textarea
						className="h-100"
						type="text"
						name="text"
						placeholder="Message..."
						maxlength="55"
						onChange={this.onTextChanged}
						value={this.state.msgtext}
					/>
					<button type="submit" className="btn border-0"></button>
				</form>
            </div>
        );
    }
}

export default MessageInput;
