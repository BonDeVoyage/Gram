import React, {Component} from 'react';
import ConversetionPreview from "./ConversetionPreview";
import UserService from "../service/UserService"
import {  JsonHubProtocol, HubConnectionBuilder} from '@microsoft/signalr';

export default class Conversetions extends Component {

	constructor(props)
	{
		super(props);

		this.state = {
			conversations: [],
			hubConnection :	[],
			lastSelectedConversation: ""
		};

	}

		
	componentDidMount()
	{
		UserService.getCurrentUserConversations().then((res) => 
		{	
			this.setState({
				conversations: res.data,
				hubConnection :	
					new HubConnectionBuilder()
					.withUrl("https://localhost:5001/api/conversation/msgSent")
					.withAutomaticReconnect()
					.withHubProtocol(new JsonHubProtocol())					
					.build()	
			});
			
			this.state.hubConnection.on("ReceiveMsg", (newConversation) => {
				if(this.state.lastSelectedConversation == newConversation.id) this.props.conversationUpdate(newConversation);
				let Conversations = this.state.conversations.filter(item => item.id !== newConversation.id);
				Conversations.unshift(newConversation);	
				this.setState({conversations: Conversations});
			});	
			
			this.state.hubConnection.start();
			
		});	
	}
	
	onConversationClick = (conv) =>
	{
		this.setState({lastSelectedConversation:conv.id});
	}

	render() {
		console.log(this.state.conversations);
        return (
            <div className="list-group h-100">
				{this.state.conversations.length && this.state.conversations.map((conv)=>
					{
						return(
								<a href={"conversation/" + conv["id"]} onClick={(e)=>{e.preventDefault(); this.props.conversationUpdate(conv); this.onConversationClick(conv)}} className=" list-group-item list-group-item-action ">
									<ConversetionPreview key={conv.messages} conversation={conv} />
								</a>
						);
					})
				}
            </div>
            );
    }
}
