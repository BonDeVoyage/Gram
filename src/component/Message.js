import React, {Component} from 'react';
import {Avatar} from "@material-ui/core";
import "../styles/message.css"

class Message extends Component {
    render() {
        return (
            <div className="d-flex mb-2">
				<Avatar/>
				<div className="flex-inline-block msgbackground w-50 text-wrap text-break p-3 pl-4 pr-4">
                    <h6>Messaggsgnsdigndsinidggjsdgdsgsdgdssdgds</h6>
					<span className="float-right">18.53</span>
				</div>
            </div>
        );
    }
}

export default Message;