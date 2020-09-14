import React, {Component} from 'react';
import ChatSearch from "./ChatSearch";
import Conversetions from "./Conversetions";
import "../styles/leftpanel.css";

class LeftPanel extends Component {
	constructor(props) {
		super(props);
	}
	
	updateConversation = (conv) =>
	{
		console.log(this.props.conversationUpdater);
		this.props.conversationUpdater(conv);
	}




    render() {
        return (
            <div className="flex-column leftPanel h-100 w-25">
                <ChatSearch/>

                <Conversetions conversationUpdate={this.updateConversation}  />

            </div>
        );
    }
}

export default LeftPanel;