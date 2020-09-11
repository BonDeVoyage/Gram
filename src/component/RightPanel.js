import React, {Component} from 'react';
import MessageHistory from "./MessageHistory";
import {Message} from "@material-ui/icons";
import MessageInput from "./MessageInput";
import UserInfo from "./UserInfo";
import "../styles/rightpanel.css"

class RightPanel extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			conversation:this.props.currentConversation
		};
	}
		
	componentDidUpdate(prevProps)
	{
		if(this.props.currentConversation['id'] !== prevProps.currentConversation['id'])
		{
			this.setState({conversation:this.props.currentConversation});
		}
	}
	
    render() {
        return (
            <div className="border-0 w-75 h-100">
				<div className="row border-0 userInfo m-0">
					<UserInfo conversation={this.state.conversation}/>
				</div>
				<div className="row border-0 msgHistory m-0">
					<MessageHistory conversation={this.state.conversation}/>
				</div>
				<div className="row border-0 msgForm m-0">
					<MessageInput conversation={this.state.conversation} />
				</div>	
            </div>
        );
    }
}

export default RightPanel;