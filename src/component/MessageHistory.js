import React, {Component} from 'react';
import Message from "./Message";

class MessageHistory extends Component {
    render() {
        return (
            <div className="p-3 w-50">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        );
    }
}

export default MessageHistory;