import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import UserService from "../service/UserService";


export default function SearchConversationDialog(props) {

    let [username,setUsername] = React.useState(" ");
    let [user,setUser] = React.useState(null);
    const { onClose, selectedValue, open } = props;

    const handleClose = (selectedValue) => {
        this.state.onClose(selectedValue);
    };


    const handleListItemClick = (value) => {
        this.state.onClose(value);
    };


    const handleUsernameChange = (e)  => {
        setUsername(e.target.value)
        let user = {
            username: username
        }
        console.log(e.targe.value)
        UserService.getUserByUsername(user).then(res => {
            setUser(res.data)
            console.log("res - data")
            console.log(res.data)
            if(res.data.username === undefined){
                setUser(null)
            }
        })

    }


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle className="ml-auto" id="simple-dialog-title">Search User</DialogTitle>
            <FormControl >
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    onChange={handleUsernameChange}
                />
            </FormControl>
            <List>
                { user !== null ?
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar src={user.avatar}>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.username}/>
                    </ListItem> : <p>No users with such username</p>
                }
            </List>
        </Dialog>
    );
}

