import React, {Component} from 'react';
import MessageHistory from "./MessageHistory";
import {Message} from "@material-ui/icons";
import MessageInput from "./MessageInput";
import UserInfo from "./UserInfo";
import "../styles/rightpanel.css"

class RightPanel extends Component {
    render() {
        return (
            <div className="border-0 w-75 h-100">
				<div className="row border-0 userInfo m-0">
					<UserInfo/>
				</div>
				<div className="row border-0 msgHistory m-0">
					<MessageHistory/>
				</div>
				<div className="row border-0 msgForm m-0">
					<MessageInput/>
				</div>	
            </div>
        );
    }
}

export default RightPanel;