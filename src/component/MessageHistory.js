import React, {Component} from 'react';
import Message from "./Message";

class MessageHistory extends Component {
    render() {
        return (
            <div className="msgHistory pr-3 pl-3">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        );
    }
}

export default MessageHistory;