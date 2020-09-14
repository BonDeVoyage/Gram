import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import UserService from "../service/UserService";
import SearchConversationDialog from "./SearchConversationDialog";
import "../styles/Header.css"
import ConversationService from "../service/ConversationService";

export default class Header extends Component {

	constructor(props)
	{
		super(props)
		this.state = {
			dialogOpen: false,
			selectedUser: null,
			newConversationId: null
		}
		this.handleClose = this.handleClose.bind(this)
		this.onAddClick = this.onAddClick.bind(this)
		this.handleMessageSent = this.handleMessageSent.bind(this);
	}


	onAddClick(){
		console.log("On add click")
		this.setState({dialogOpen: true})
	}

	handleClose(user){
		this.setState({
			selectedUser: user
		})
		console.log(user);
		if(user !== null){
			ConversationService.createConversation(user.id).then(r => {
				let newConversation = r.data;
				console.log("Create conversation");
				console.log(user.id);
				this.setState({newConversationId: newConversation.id})
			})
		}
		this.forceUpdate();
	}

	handleMessageSent(message){
		console.log("header ms")
		this.setState({ dialogOpen : false })
		ConversationService.msgSend(this.state.newConversationId,message).then(r => {
			console.log("sended mes");
			console.log(r.data)
		})
	}



	onLogoutClick = () => 
	{
		UserService.logout().then(()=>{
			this.props.history.push("/login");
		});
    }

	render()
	{
		return (
			<div className="w-75">
				<AppBar color="primary" position="static">
					<Toolbar className="bar_items flex-row justify-content-xl-between">
						<IconButton edge="start" className="" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>			
						<h5 className="bar m-0">Messenger</h5>
						<Tooltip className="ml-auto"  title="Add" aria-label="add"
								 onClick={this.onAddClick}>
							<Fab color="primary" >
								<AddIcon />
							</Fab>
						</Tooltip>
						<SearchConversationDialog
							open={this.state.dialogOpen}
							onClose={this.handleClose}
							selectedValue={this.state.selectedUser}
							onMessageSent={this.handleMessageSent}
						/>
						<Link onClick={this.onLogoutClick} className="lr bar" >Logout</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}