import React, {Component} from 'react';
import UserService from "../service/UserService";

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
            console.log("Data from login");
            console.log(res.data);

            this.props.history.push({
                pathname: '/',
                state: { user : res.data }
            })
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Login</h3>
                        <div className="card-body flex-column align-items-start">
                            <form>

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

                            <button type className="btn btn-success mr-3 mt-2 " onClick={this.onLoginUserClick} >Login</button>
                            <button className="btn btn-danger mt-2" onClick={this.onCancelClick} >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
