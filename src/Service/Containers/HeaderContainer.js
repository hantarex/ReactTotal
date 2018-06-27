import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import GetHistory from "../FetchData/GetHistory";
import {setHistory} from "../Actions/setHistory";
import HashRouter from "react-router-dom/es/HashRouter";
import createHashHistory from "history/es/createHashHistory";
import {SetPage} from "../Actions/SetPage";

class HeaderContainer extends Component {
    checkHistory(e){
        this.props.setHistory(null);
        this.props.setPage("history");
        e.preventDefault();
    }
    checkHome(e){
        this.props.setPage("");
        e.preventDefault();
    }
    checkInfo(e){
        this.props.setPage("info");
        e.preventDefault();
    }
    render() {
        return (
                <div className="header">
                    <ul>
                        <li><a href="" className={this.props.page === "" ? "active" : ""} onClick={this.checkHome.bind(this)}>ИГРА. Количество ставок: <b>{this.props.data.attempts}</b></a></li>
                        <li><a href="" className={this.props.page === "history" ? "active" : ""} onClick={this.checkHistory.bind(this)}>История ставок</a></li>
                        <li><a href="" className={this.props.page === "info" ? "active" : ""} onClick={this.checkInfo.bind(this)}>Информация</a></li>
                    </ul>
                </div>
        )
    }
}


export default connect(
    state => ({
        data: state.data,
        page: state.page
    }),
    dispatch => ({
        getHistory: () => {dispatch(GetHistory())},
        setHistory: (data) => {dispatch(setHistory(data))},
        setPage: (data) => {dispatch(SetPage(data, "PAGE_SET"))}
    })
)(HeaderContainer);