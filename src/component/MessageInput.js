import React, {Component} from 'react';
import '../styles/Messageinput.css'

class MessageInput extends Component {
    render() {
        return (
            <div className=" w-100 h-100 border-0 MessageInput m-0 justify-content-center align-items-center">
				<form  className="row m-0 w-100 h-100 p-4 ">
					<textarea
						className="h-100"
						type="text"
						name="Message"
						placeholder="Message..."
					/>
					<button type="submit" className="btn border-0"></button>
				</form>
            </div>
        );
    }
}

export default MessageInput;
