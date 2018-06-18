import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class HeaderContainer extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/bet">Игра. Количество ставок: {this.props.data.attempts}</Link></li>
                    <li><Link to="/history">История ставок</Link></li>
                    <li><Link to="/">Информация</Link></li>
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function matchDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderContainer);