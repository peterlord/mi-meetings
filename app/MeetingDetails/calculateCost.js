function calculateCost(meeting){

	var annualSalaryCombined = meeting.attendees
		.map(attendee => {
			return meeting.roles[attendee.role].salary * attendee.count;
		})
		.reduce((a,b) => a + b, 0);

	return (annualSalaryCombined / 365 * 8 * 60) * meeting.meetingLength;
}

export default calculateCost;