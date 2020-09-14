import React, {Component} from 'react';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import UserService from "../service/UserService"
import Header from "./Header"
import '../styles/Main.css'

class Main extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			renderRightPanel:false,
			currentConversation:null
		};
	}
	
	updaterConversation = (conv) =>
	{
		this.setState({currentConversation:conv,renderRightPanel:true});	
	}
	
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
					<Header history={this.props.history} />
				</div>
				<div className="row m-0 h-100 justify-content-center">
					<div className="w-75 d-flex h-100">
						<LeftPanel conversationUpdater={this.updaterConversation}/>
						{ this.state.renderRightPanel && <RightPanel currentConversation={this.state.currentConversation}/>}
					</div>
				</div>
            </div>
        );
    }
}

export default Main;