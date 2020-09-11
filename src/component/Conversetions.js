import React, {Component} from 'react';
import ConversetionPreview from "./ConversetionPreview";
import UserService from "../service/UserService"

export default class Conversetions extends Component {


	componentDidMount()
		{
			UserService.getCurrentUserConversations().then((res) => {
				this.setState({conversations: res.data});
			});
		}


    render(){
        return (
            <div className="list-group h-100">
				{this.state.conversations.length && this.state.conversations.map((conv)=>
					{
						return(
							<a href={"conversation/" + conv["id"]} onClick={(e)=>{e.preventDefault(); this.props.conversationUpdate(conv)}} className=" list-group-item list-group-item-action ">
								<ConversetionPreview conversation={conv} />
							</a>
						);
					})
				}
            </div>
            );
    }
}
