import React, {Component} from 'react';
import {Avatar} from "@material-ui/core";
import UserService from "../service/UserService"

class UserInfo extends Component {
	constructor(props)
	{
		super(props);
		this.state = {user : [], avatar:""};
	}
	
	fillAvatar = () =>
	{
		if(this.state.user['avatar'] === null || this.state.user['avatar'].startsWith("data:application"))
		{
			let username = this.state.user['username'];
			this.setState({avatar:<Avatar className="mt-0 avatar">{username[0]}</Avatar>});
		}
		else
		{
			this.setState({avatar:<Avatar src={this.state.user['avatar']} className="mt-0" ></Avatar>});
		}
	}
	
	initializeReceiverUser = () =>
	{
		UserService.getCurrentUser().then((result)=>
		{
			let id = result.data['id'] === this.props.conversation['userId'] ? this.props.conversation['receiverId'] : this.props.conversation['userId'];
			UserService.getUserById(id).then((res) => 
			{
				this.setState({user : res.data});
				this.fillAvatar();
			});
		});
	}
	
	componentDidMount()
	{
		this.initializeReceiverUser();
	}
	
	componentDidUpdate(prevProps)
	{
		if(this.props.conversation['id'] !== prevProps.conversation['id'])
		{
			this.initializeReceiverUser();
		}
	}
	
    render() {
		return (
			<div className="container-fluid p-3 d-flex">
				{this.state.avatar}
				<h4	className="ml-3 mb-0 pt-2 d-inline-block">{this.state.user['username']}</h4>
			</div>
		);
    }
}

export default UserInfo;