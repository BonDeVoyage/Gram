import React, {Component} from 'react';
import ConversetionPreview from "./ConversetionPreview";

export default class Conversetions extends Component {
    render() {
        console.log(this.props.conversations)
        return (
            <div className="list-group">

                <a href="#" className=" mt-3 list-group-item list-group-item-action ">
                   <ConversetionPreview/>
                </a>

                <a href="#" className=" mt-3 list-group-item list-group-item-action ">
                   <ConversetionPreview/>
                </a>

                <a href="#" className=" mt-3 list-group-item list-group-item-action ">
                   <ConversetionPreview/>
                </a>
            </div>
            );
    }
}
