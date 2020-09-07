import React, {Component} from 'react';
import UserService from "../service/UserService";
import './LoginStyles.css'

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


    onLoginUserClick(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        UserService.loginUser(user).then(res => {
        })
        this.props.history.push()
    }

    render() {
        return (

            <div className="container-fluid h-100 p-0 BackgroundGif">
                <div className=" row h-100 justify-content-center align-items-center">
                    <div className="card w-50 container-fluid LoginForm">
                        <div className="card-body flex-column align-items-start ">
                            <form className="my-auto text-center">
                              <div className="form-group">
                                <label>Username:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="username"
                                        onChange={this.onUsernameChangeHandler}

                                        // value={this.state.firstName}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Password:</label>
                                    <br/>
                                    <input
                                        className="w-75"
                                        name="password"
                                        onChange={this.onPasswordChangeHandler}

                                        // value={this.state.email}
                                    />
                                </div>
                            </form>
                            <div className=" row h-100  justify-content-center align-items-center">
                              <button type className="btn" onClick={this.onLoginUserClick} >Login</button>
                            </div>
                            <div className="form-group m-0 p-0 text-center">
                              <a className="signIn" href="/login">New to Gram? Sign up!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
