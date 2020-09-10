import React, {Component} from 'react';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import UserService from "../service/UserService"
import Header from "./Header"
import '../styles/Main.css'

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
			<div className="container-fluid flex-column h-100 p-0 main">
				<div className="row m-0 justify-content-center">
					<Header />
				</div>
				<div className="row m-0 h-100 justify-content-center">
					<div className="w-75 d-flex h-100">
						<LeftPanel/>
						<RightPanel/>
					</div>
				</div>
            </div>
        );
    }
}

export default Main;