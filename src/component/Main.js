import React, {Component} from 'react';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import './Main.css'
class Main extends Component {
    render() {
        return (
            <div className="main">
                <LeftPanel/>
                {/*<RightPanel/>*/}
            </div>
        );
    }
}

export default Main;