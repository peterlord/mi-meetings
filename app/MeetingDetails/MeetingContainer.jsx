import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MeetingForm from './MeetingForm.jsx';
import MeetingCost from './MeetingCost.jsx';
import updateAttendeesAction from './updateAttendeesAction.js';
import showCostsAction from './showCostsAction.js';
import costUpdatedAction from './costUpdatedAction.js';
import updateMeetingLengthAction from './updateMeetingLengthAction.js';
import { hashHistory } from 'react-router';

class MeetingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MeetingContainer';
    }
    render() {
        return <div>
        	{ this.props.meeting.showCosts ? <MeetingCost {...this.props} /> : null }
        	<MeetingForm {...this.props} />
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

			//hashHistory.push('/chat');
		},
	}
}

function calculateMeetingCost(dispatch){

	dispatch(costUpdatedAction(calculateCosts()));
	dispatch(showCostsAction(true));
}

function calculateCosts(meeting){

	return 1000;
}

export default MeetingContainer = connect(mapStateToProps, mapDispatchToProps)(MeetingContainer);