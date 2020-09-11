import React, {Component} from 'react';
import {Avatar} from "@material-ui/core";
import "../styles/message.css"

class Message extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			msgCreatedAt: new Date(this.props.msg['created_At']),
			avatar: ""
		}
	}
	
	fillAvatar = () =>
	{
		let user = this.props.msg['user'];
		if(user['avatar'] === null || user['avatar'].startsWith("data:application"))
		{
			let username = user['username'];
			this.setState({avatar:<Avatar className="mt-1 avatar">{username[0]}</Avatar>});
		}
		else
		{
			this.setState({avatar:<Avatar src={user['avatar']} className="mt-1" ></Avatar>});
		}
	}
	
	componentDidMount()
	{
		this.fillAvatar();
	}
	
    render() {
        return (
            <div className="d-flex mb-2">
			{this.state.avatar}
				<div className="flex-inline-block msgbackground w-50 text-wrap text-break p-3 pl-4 pr-4">
                    <h6>{this.props.msg['text']}</h6>
					<span className="float-right">{this.state.msgCreatedAt.toLocaleTimeString()}</span>
				</div>
            </div>
        );
    }
}

export default Message;