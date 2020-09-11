import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Reddit} from "@material-ui/icons";
import UserService from "../service/UserService";
import "../styles/Header.css"

export default class Header extends Component {
	constructor(props)
	{
		super(props)
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
					<Toolbar>
						<IconButton edge="start" className="" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>			
						<h5 className="bar m-0">Messenger</h5>
						<Link onClick={this.onLogoutClick} className="lr bar" >Logout</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}