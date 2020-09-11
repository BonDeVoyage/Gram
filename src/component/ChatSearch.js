import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import "../styles/ChatSearch.css"

export default class ChatSearch extends Component {


    constructor(props) {
        super(props);
        this.state = {
            queryBody: " "
        }
        this.onQueryChange = this.onQueryChange.bind(this);
    }


    onQueryChange(e) {
        this.setState({queryBody: e.target.value})
        console.log(this.state.queryBody);
    }


    render() {
        return (

            <FormControl className="w-100 searchForm">
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon color="primary"/>
                        </InputAdornment>
                    }
                    placeholder="Search"
                />
            </FormControl>
        );
    }
}

