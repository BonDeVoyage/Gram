import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import UserService from "../service/UserService"
import EmailIcon from '@material-ui/icons/Email'
import "../styles/ConversetionPreview.css"

class ConversetionPreview extends React.Component {

    constructor(props) {
        super(props);
		this.state = {user : [], lastMsg: "", lastMsgTime:"", avatar:""}
    }

	fillAvatar()
	{
		if(this.state.user['avatar'] === null || this.state.user['avatar'].startsWith("data:application"))
		{
			let username = this.state.user['username'];
			this.setState({avatar:<Avatar className="mt-1 avatar">{username[0]}</Avatar>});
		}
		else
		{
			this.setState({avatar:<Avatar src={this.state.user['avatar']} className="mt-1" ></Avatar>});
		}
	}
	
	initializeReceiverUser()
	{
		UserService.getCurrentUser().then((result)=>
		{
			let id = result.data['id'] === this.props.conversation['userId'] ? this.props.conversation['receiverId'] : this.props.conversation['userId'];
			UserService.getUserById(id).then((res) => 
			{
				let messages = this.props.conversation['messages'];
				let lastMsg = messages[messages.length - 1]; 
				if(lastMsg === undefined) 
				{
					this.setState({user : res.data,lastMsg:"", lastMsgTime:""});
				}
				else 
				{
					let MsgDate = new Date(lastMsg['created_At']);
					this.setState({user : res.data, lastMsg: messages[messages.length - 1]['text'],lastMsgTime:MsgDate.toLocaleTimeString()});
				}
				this.fillAvatar();
			});
		});
	}

	componentDidMount()
	{
		this.initializeReceiverUser();
	}

    render() {
		
        return (
                <div className="PreviewContainer  w-100">
                    <div className="leftPreview">
						{this.state.avatar}
                        <div className="titleAndLm ml-2">
                            <h5>{this.state.user.username}</h5>
                            <span className="lastMsg">{this.state.lastMsg}</span>
                        </div>
                    </div>
                    <div className="messageDetail">
                        <small>{this.state.lastMsgTime}</small>
						{this.props.conversation.hasNewMessages && 	<EmailIcon />}
                    </div>
                </div>
        );
    }
}

export default ConversetionPreview;