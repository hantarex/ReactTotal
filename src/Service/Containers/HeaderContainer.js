import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import GetHistory from "../FetchData/GetHistory";
import {setHistory} from "../Actions/setHistory";

class HeaderContainer extends Component {
    checkHistory(){
        this.props.setHistory(null);
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Игра. Количество ставок: {this.props.data.attempts}</Link></li>
                    <li><Link to="/history" onClick={this.checkHistory.bind(this)}>История ставок</Link></li>
                    <li><Link to="/info">Информация</Link></li>
                </ul>
            </div>
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