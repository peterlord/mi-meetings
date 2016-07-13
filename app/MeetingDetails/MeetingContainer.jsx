import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MeetingForm from './MeetingForm.jsx';
import MeetingCost from './MeetingCost.jsx';
import updateAttendeesAction from './updateAttendeesAction.js';
import showCostsAction from './showCostsAction.js';
import costUpdatedAction from './costUpdatedAction.js';
import updateMeetingLengthAction from './updateMeetingLengthAction.js';
import startMeetingAction from './startMeetingAction.js';
import { hashHistory } from 'react-router';

class MeetingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MeetingContainer';
    }
    render() {
        return <div>
        	<MeetingForm {...this.props} />
        	{ this.props.meeting.showCosts ? <MeetingCost {...this.props} /> : null }
        	
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
		onAddMeeting: (values) => {
			dispatch(updateAttendeesAction(values.attendees));
			dispatch(updateMeetingLengthAction(values.meetingLength));
			calculateMeetingCost(dispatch);
		},
		onStartMeeting: () => {
			dispatch(startMeetingAction());
			hashHistory.push('/increment');
		}
	}
}

function calculateMeetingCost(dispatch){

	dispatch(costUpdatedAction(calculateCosts()));
	dispatch(showCostsAction(true));
}

function calculateCosts(){

	return 1000;
}

export default MeetingContainer = connect(mapStateToProps, mapDispatchToProps)(MeetingContainer);