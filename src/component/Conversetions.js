import React, {Component} from 'react';
import ConversetionPreview from "./ConversetionPreview";

export default class Conversetions extends Component {
    render() {
        return (
            <div className="list-group h-100">
				<a href="#" className=" list-group-item list-group-item-action ">
                   <ConversetionPreview/>
                </a>
				<a href="#" className=" list-group-item list-group-item-action ">
                   <ConversetionPreview/>
                </a>
				<a href="#" className=" list-group-item list-group-item-action ">
                   <ConversetionPreview/>
                </a>
            </div>
            );
    }
}
