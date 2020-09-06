import React, {Component} from 'react';
import MessageHistory from "./MessageHistory";
import {Message} from "@material-ui/icons";
import MessageInput from "./MessageInput";

class RightPanel extends Component {
    render() {
        return (
            <div className="p-3 border  w-75 h-100">
                <MessageHistory/>
                <MessageInput/>
            </div>
        );
    }
}

export default RightPanel;