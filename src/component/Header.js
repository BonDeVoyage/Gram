import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Reddit} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./Header.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function  ButtonAppBar() {
    const classes = useStyles();

    function onSignInClick(){
        console.log("Register redirect")
        // useHistory.push("/register")
    }

    function onLoginClick(){
        console.log("Login redirect")
        // useHistory.push('/login')
    }


    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Messenger
                    </Typography>
                    <Link to="/login" className="lr mr-3" >Login</Link>
                    <Link to="/register" className="lr" >Sign In</Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}
