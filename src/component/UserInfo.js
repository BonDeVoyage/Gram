import React, {Component} from 'react';
import {Avatar} from "@material-ui/core";

class UserInfo extends Component {
    render() {
		return (
			<div className="container-fluid p-3 d-flex">
				<Avatar className="m-0"/>
				<h4	className="ml-3 mb-0 pt-2 d-inline-block">UserName</h4>
			</div>
		);
    }
}

export default UserInfo;