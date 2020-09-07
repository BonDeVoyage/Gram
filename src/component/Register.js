import React, {Component} from 'react';
import UserService from "../service/UserService";
import ImageUploader from 'react-images-upload';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
			avatar: null,
            username: " ",
            name: " ",
            surname: " ",
            password: " "
        }


        this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onSurnameChangeHandler = this.onSurnameChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSaveUserClick = this.onSaveUserClick.bind(this);
		this.onAvatarDropHandler = this.onAvatarDropHandler.bind(this);
    }

	onAvatarDropHandler(picture){
		this.setState({
			avatar: picture 
		});
		console.log("Picture uploaded");
	}

    onUsernameChangeHandler(e){
        this.setState({
            username: e.target.value
        })
        console.log("username change - " + this.state.username);
    }
    onNameChangeHandler(e){
        this.setState({
            name: e.target.value
        })
        console.log("name change - " + this.state.name);
    }
    onSurnameChangeHandler(e){
        this.setState({
            surname: e.target.value
        })
        console.log("surname change - " + this.state.surname);
    }

    onPasswordChangeHandler(e){
        this.setState({
            password: e.target.value
        })
        console.log("password change - " + this.state.password);
    }

    onSaveUserClick(){
		var reader = new FileReader();
		reader.readAsDataURL(this.state.avatar[0]);
		console.log(reader.result);
		reader.onloadend = function ()
		{
			const user = {
				username: this.state.username,
				name: this.state.name,
				surname: this.state.surname,
				password: this.state.password,
				avatar: reader.result
			}
			UserService.createUser(user).then(r => {
				console.log(user)
				this.props.history.push("/login");
			});
		}.bind(this);
    }


    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Sign In</h3>
                        <div className="card-body flex-column align-items-start">
                            <form>
								<div className="form-group">
									<ImageUploader
										withIcon = {false}
										buttonText='Choose Avatar'
										onChange = {this.onAvatarDropHandler}
										singleImage = {true}
										withLabel = {false}
										withPreview = {true}
										name="avatar"
									/>
								</div>
                                
								<div className="form-group">
                                    <label>Username:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="username"
                                        onChange={this.onUsernameChangeHandler}
                                        placeholder="Enter Username"
                                        // value={this.state.firstName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Name:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="Name"
                                        onChange={this.onNameChangeHandler}
                                        placeholder="Enter Name"
                                        // value={this.state.lastName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Surname:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="Surname"
                                        onChange={this.onSurnameChangeHandler}
                                        placeholder="Enter Surname"
                                        // value={this.state.email}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="password"
                                        onChange={this.onPasswordChangeHandler}
                                        placeholder="Enter Password"
                                        // value={this.state.email}
                                    />
                                </div>
                            </form>

                            <button type className="btn btn-success mr-3 mt-2 " onClick={this.onSaveUserClick} >Save</button>
                            <button className="btn btn-danger mt-2" onClick={this.onCancelClick} >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

