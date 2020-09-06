import React, {Component} from 'react';
import {Avatar} from "@material-ui/core";
import "./Message.css"
class Message extends Component {
    render() {
        return (
            <div className="msg">
                <Avatar/>
                <div className="usernameAndMt flex-column align-items-start">
                    <h5>Username</h5>
                    <p>Message text</p>
                </div>
                <span className="time">18.53</span>
            </div>
        );
    }
}

export default Message;