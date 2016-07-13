import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Increment from './Increment.jsx';
import { hashHistory } from 'react-router';
import incrementMeetingMinutesAction from './incrementMeetingMinutesAction.js';

class IncrementContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'IncrementContainer';
       
    }

	componentDidMount() {
        const { dispatch } = this.props;
        incrementCounter(dispatch);
    }

    render() {
        return <div>
        	<Increment {...this.props}/>
        </div>;
    }
}

function mapStateToProps(state) {
	return {
		meeting: state.meeting
	};
}

function mapDispatchToProps(dispatch){
	return {
	}
}

function incrementCounter(dispatch){
	setInterval(function() {
    	dispatch(incrementMeetingMinutesAction());
	}, 1 * 1000);
}

export default IncrementContainer = connect(mapStateToProps)(IncrementContainer);