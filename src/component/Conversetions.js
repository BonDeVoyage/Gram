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
			hubConnection :	[]	
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
				this.setState({conversation:newConversation});
				this.props.conversationUpdate(newConversation);
			});	
			
			this.state.hubConnection.start();
			
		});	
	}

	render() {
        return (
            <div className="list-group h-100">
				{this.state.conversations.length && this.state.conversations.map((conv)=>
					{
						return(
							<a href={"conversation/" + conv["id"]} onClick={(e)=>{e.preventDefault(); this.props.conversationUpdate(conv)}} className=" list-group-item list-group-item-action ">
								<ConversetionPreview key={conv['id']} conversation={conv} />
							</a>
						);
					})
				}
            </div>
            );
    }
}
