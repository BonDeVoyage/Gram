import React, {Component} from 'react';
import ConversetionPreview from "./ConversetionPreview";

export default class Conversetions extends Component {
    render() {
        let userInfo = this.props.userInfo
        console.log(userInfo)
        return (
            <div className="list-group">
                {
                    // userInfo.conversations.map(conversation => (
                    <a href="#" className=" mt-3 list-group-item list-group-item-action ">
                        <ConversetionPreview/>
                    </a>
                    // ))}
                }

            </div>
            );
    }
}
