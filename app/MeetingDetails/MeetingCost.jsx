import React, { PropTypes } from 'react'

const MeetingCost = (props) => <ul><li>{props.meeting.meetingLength}</li></ul>;

MeetingCost.proptypes = {
	meeting: React.PropTypes.object
}

export default MeetingCost