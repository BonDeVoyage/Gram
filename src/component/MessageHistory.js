import React, {Component} from 'react';
import Message from "./Message";

class MessageHistory extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			messages:[]
		};
	}
		
	componentDidMount()
	{
		this.setState({messages:this.props.conversation['messages']})
	}
			
	componentDidUpdate(prevProps)
	{
		if(this.props.conversation['id'] !== prevProps.conversation['id'] || this.props.conversation['messages'].length !== prevProps.conversation['messages'].length)
		{
			this.setState({messages:this.props.conversation['messages']});
		}
	}		
			
    render() {
        return (
            <div className="p-3 w-50">
				{this.state.messages.map((msg) => 
					{
						return(<Message msg={msg} />);
					})
				}
            </div>
        );
    }
}

export default MessageHistory;