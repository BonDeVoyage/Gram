import React from 'react'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserService from "../service/UserService";


export default function SearchConversationDialog(props) {

    let [username,setUsername] = React.useState(" ");
    let [user,setUser] = React.useState(null);
    const { onClose, selectedValue, open, onMessageSent } = props;
    let [message,setMessage] = React.useState(" ");


    const handleListItemClick = (value) => {
        onClose(value)
        setUser(null)
        console.log("After return user is")
        console.log(user);
    };


    const handleUsernameChange = (e)  => {
        let l_user = {
            username: e.target.value
        }
        console.log(e.target.value)
        UserService.getUserByUsername(l_user).then(res => {
            if(res.data.username === undefined){
                setUser(null)
                console.log("inside if");
            }
            setUser(res.data)
        })
    }


    function onMessageChange(e) {
        console.log(e.target.value)
        setMessage(e.target.value)
    }

    function onMessageSend() {
        console.log("oms");
        onMessageSent(message)
    }


    let createConversationItem =
        (
            <div>
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
                {
                    user !== null ? (
                        <ListItem button onClick={() => handleListItemClick(user)}>
                            <ListItemAvatar>
                                <Avatar src={user.avatar}>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user.username}/>
                        </ListItem>
                    ) : <p>No such user</p>
                }
            </div>
)

    let sendMessageItem =
        (
            <ListItem>
        <TextField onChange={onMessageChange}/>
        <Button onClick={onMessageSend}>Send</Button>
    </ListItem>
        )

    return (
        <Dialog className="p-2" aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle className="ml-auto" id="simple-dialog-title">
                 {
                     selectedValue === null ? "Search User" : "First message"
                 }
            </DialogTitle>
            <List>
                {
                    selectedValue === null ? createConversationItem : sendMessageItem
                }
            </List>
        </Dialog>
    );
}

