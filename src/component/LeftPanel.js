import React, {Component} from 'react';
import ChatSearch from "./ChatSearch";
import Conversetions from "./Conversetions";
import ConversetionPreview from "./ConversetionPreview";
import "../styles/leftpanel.css";

class LeftPanel extends Component {
    render() {
        return (
            <div className="flex-column leftPanel h-100 w-25">
                <ChatSearch/>
                <Conversetions/>
            </div>
        );
    }
}

export default LeftPanel;