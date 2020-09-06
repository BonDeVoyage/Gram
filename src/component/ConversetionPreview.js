import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import "./ConversetionPreview.css"

class ConversetionPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names : this.props.names
        }
    }

    render() {

        return (
                <div className="PreviewContainer  w-100">
                    <div className="leftPreview">
                        <Avatar className="mt-1" ></Avatar>
                        <div className="titleAndLm ml-2">
                            <h5>Username</h5>
                            <span>last message</span>
                        </div>
                    </div>
                    <div className="messageDetail">
                        <small >16.45</small>
                        <Badge className="mt-2" badgeContent={4} color="primary"/>
                        <MailIcon />
                    </div>
                </div>
        );
    }
}

export default ConversetionPreview;