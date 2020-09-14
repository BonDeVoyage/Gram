import React, {Component} from 'react';
import UserService from "../service/UserService";
import ImageUploader from 'react-images-upload';
import "../styles/register.css"

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
			avatar: [],
            username: " ",
            name: " ",
            surname: " ",
            password: " ",
			errors: []
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
	}

    onUsernameChangeHandler(e){
        this.setState({
            username: e.target.value
        })
    }
    onNameChangeHandler(e){
        this.setState({
            name: e.target.value
        })
    }
    onSurnameChangeHandler(e){
        this.setState({
            surname: e.target.value
        })
    }

    onPasswordChangeHandler(e){
        this.setState({
            password: e.target.value
        })
    }
	
	validateForm = (user) => {
		let validator = new RegExp('^(?=.{3,9}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
		let error = [];
		
		if(!(validator.test(user.username) && validator.test(user.password) && validator.test(user.name) && validator.test(user.surname)))
		{
			error.push("Oops, but your username/name/surname/password might be incorrect!");
			error.push("Please, check your input to meet such conditions:");
			error.push("	- U/N/S/P must contain (3-9) characters ");
			error.push("	- U/N/S/P cant start/end with _ or . character ");
			error.push("	- U/N/S/P allowed characters: a-z(A-Z) or numbers ");
			this.setState({errors: error});
			return false;
		}
		return true;
	}
	
    onSaveUserClick(e){
		e.preventDefault();
		if(!this.state.avatar.length)	this.state.avatar.push(new Blob())
		var reader = new FileReader();
		reader.readAsDataURL(this.state.avatar[0]);
		reader.onloadend = function ()
		{
			const user = {
				username: this.state.username,
				name: this.state.name,
				surname: this.state.surname,
				password: this.state.password,
				avatar: reader.result
			}
			
			if(1)
			{
				UserService.createUser(user).then(r => {
					this.props.history.push("/login");
				});
			}
		}.bind(this);
    }


    render() {
        return ( 
            <div className="card-body backgroundImage h-100">
                <div className="row h-100 justify-content-center align-items-center">
					<div className="w-25 p-0 container-fluid">
						<form onSubmit={this.onSaveUserClick} className="registerForm my-auto p-3 text-center">
							<div className="form-group m-3">
								<label>Username</label>
								<br/>
								<input
									className="w-75 p-2"
									name="username"
									onChange={this.onUsernameChangeHandler}
									value={this.username}
								/>
							</div>

							<div className="form-group m-3">
								<label>Name</label>
								<br/>
								<input
									className="w-75 p-2"
									name="Name"
									onChange={this.onNameChangeHandler}
									value={this.name}
								/>
							</div>

							<div className="form-group m-3">
								<label>Surname</label>
								<br/>
								<input
									className="w-75 p-2"
									name="Surname"
									onChange={this.onSurnameChangeHandler}
									value={this.surname}
								/>
							</div>

							<div className="form-group m-3">
								<label>Password</label>
								<br/>
								<input
									className="w-75 p-2"
									name="password"
									type="password"
									onChange={this.onPasswordChangeHandler}
								/>
							</div>
							
							
							<div className="form-group errors m-3">
								{
									this.state.errors.map((item) => {
										return(<p className="m-0 mb-1">{item}</p>);
									})
								}
							</div>

							
							<div className="form-group m-0">
								<ImageUploader
									withIcon = {false}
									buttonText='Choose Avatar'
									onChange = {this.onAvatarDropHandler}
									singleImage = {true}
									withLabel = {false}
									withPreview = {true}
									name="avatar"
									className="container-fluid text-center w-75 avatarForm"
								/>
							</div>
							
							<div className="form-group px-3 pt-3 mb-0">
								<button type="submit" className="btn button w-75">Save</button>
							</div>
							<div className="form-group m-0 p-0">
								<a className="signIn" href="/login">Already registered? Sign in!</a>
							</div>
						</form>
						
					</div>
                </div>
            </div>
        );
    }
}

