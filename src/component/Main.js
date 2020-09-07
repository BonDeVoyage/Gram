import React, {Component} from 'react';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import './Main.css'
class Main extends Component {
    render() {
        let user = this.props.location.state.user
        return (
            <div className="main">
                <LeftPanel userInfo = {user}/>
                {/*<RightPanel/>*/}
            </div>
        );
    }
}

export default Main;