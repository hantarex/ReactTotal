import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import GetHistory from "../FetchData/GetHistory";
import {setHistory} from "../Actions/setHistory";
import HashRouter from "react-router-dom/es/HashRouter";
import createHashHistory from "history/es/createHashHistory";

class HeaderContainer extends Component {
    checkHistory(){
        this.props.setHistory(null);
    }
    render() {
        return (
            <HashRouter history={createHashHistory}>
                <div className="header">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">ИГРА. Количество ставок: <b>{this.props.data.attempts}</b></NavLink></li>
                        <li><NavLink exact to="/history" activeClassName="active" onClick={this.checkHistory.bind(this)}>История ставок</NavLink></li>
                        <li><NavLink exact to="/info" activeClassName="active">Информация</NavLink></li>
                    </ul>
                </div>
            </HashRouter>
        )
    }
}


export default connect(
    state => ({
        data: state.data
    }),
    dispatch => ({
        getHistory: () => {dispatch(GetHistory())},
        setHistory: (data) => {dispatch(setHistory(data))},
    })
)(HeaderContainer);