import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import GetHistory from "../FetchData/GetHistory";
import {setHistory} from "../Actions/setHistory";

const HeaderContainer = ({data, setHistory}) => {
    const checkHistory = () => {
        setHistory(null);
    };
    return (
        <div className="header">
            <ul>
                <li><NavLink exact to="/" activeClassName="active">ИГРА. Количество ставок:<b>{data.attempts}</b></NavLink></li>
                <li><NavLink exact to="/history" activeClassName="active" onClick={checkHistory}>История ставок</NavLink></li>
                <li><NavLink exact to="/info" activeClassName="active">Информация</NavLink></li>
            </ul>
        </div>
    )
};


export default connect(
    state => ({
        data: state.data
    }),
    dispatch => ({
        getHistory: () => {
            dispatch(GetHistory())
        },
        setHistory: (data) => {
            dispatch(setHistory(data))
        },
    })
)(HeaderContainer);