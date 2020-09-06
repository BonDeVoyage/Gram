import React, {Component} from 'react';
import ChatSearch from "./ChatSearch";
import Conversetions from "./Conversetions";
import ConversetionPreview from "./ConversetionPreview";

class LeftPanel extends Component {
    render() {
        let names = ["Marko","Ostap","Maksym"]
        return (
            <div className=" flex-column align-items-start mt-3 w-25">
                <ChatSearch/>
                <Conversetions/>
            </div>
        );
    }
}

export default LeftPanel;