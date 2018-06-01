import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMatches} from '../Actions/SelectMacthes';

class Matches extends Component {
    render() {
        return (
            <div>
                {this.showMatches()}
            </div>
        )
    }

    showMatches() {
        return this.props.footballMatches.map((match) => {
            return (
                <div key={match.id} onClick={() => {this.props.selectMatches(match)}}>
                    {match.name}
                </div>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
        footballMatches: state.footballMatches
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectMatches: selectMatches}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Matches);