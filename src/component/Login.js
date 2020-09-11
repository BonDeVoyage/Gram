import React, {Component} from 'react';
import UserService from "../service/UserService";
import '../styles/LoginStyles.css'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: " ",
            password: " "
        }

        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
        this.onLoginUserClick = this.onLoginUserClick.bind(this);
    }

    onPasswordChangeHandler(e){
        this.setState({
            password: e.target.value
        })
        console.log("password change - " + this.state.password);
    }


    onUsernameChangeHandler(e){
        this.setState({
            username: e.target.value
        })
        console.log("username change - " + this.state.username);
    }


    onLoginUserClick(e){
		e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        UserService.loginUser(user).then(res => {
            this.props.history.push({
                pathname: '/',
                state: { userInfo: res.data }
            })
		});
					
    }

    render() {
        return (

            <div className="container-fluid h-100 p-0 BackgroundGif">
                <div className=" row h-100 justify-content-center align-items-center">
                    <div className="card w-25 container-fluid LoginForm">
                        <div className="card-body flex-column align-items-start ">
                            <form onSubmit={this.onLoginUserClick} className="my-auto text-center">
                              <div className="form-group">
                                <label>Username:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="username"
                                        onChange={this.onUsernameChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Password:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="password"
                                        onChange={this.onPasswordChangeHandler}
                                    />
                                </div>
			                    <div className=" row h-100  justify-content-center align-items-center">
									<button type="submit" className="btn">Login</button>
								</div>
								<div className="form-group m-0 p-0 text-center">
									<a className="signIn" href="/register">New to Gram? Sign up!</a>
								</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
