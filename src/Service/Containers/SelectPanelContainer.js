import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SelectPanelContainer extends Component {
    render() {
        return (
            <div>
                {this.showPanel()}
            </div>
        )
    }

    showPanel() {
        if(this.props.isLoading){
            return (
                <p>
                    Loading...
                </p>
            )
        }
        if(!this.props.activePanel){
            return (
                <p/>
            );
        }
        return (
            <p>{this.getCondition(this.props.activePanel)}</p>
        );
    }

    getCondition(activePanel) {
        return this.props.conditions[activePanel].conditions
    }
}

function mapStateToProps(state) {
    return {
        activePanel: state.activePanel,
        isLoading: state.itemsIsLoading,
        conditions: state.matchesConditions
    }
}

export default connect(mapStateToProps)(SelectPanelContainer);