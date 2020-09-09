import React, {Component} from 'react';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import UserService from "../service/UserService"
import './Main.css'

class Main extends Component {
	
	IsLoggedIn = () => 
	{
		UserService.getCurrentUser().then((res) => {
			if(res.data == null) this.props.history.push("/login"); 
		});
	}
	
	componentDidMount()
	{
		this.IsLoggedIn();
	}
	
    render() {
        return (
			<div className="main">
                <LeftPanel/>
                {/*<RightPanel/>*/}
            </div>
        );
    }
}

export default Main;