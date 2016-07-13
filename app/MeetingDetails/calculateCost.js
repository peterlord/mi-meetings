function calculateCost(meeting){

	var annualSalaryCombined = meeting.attendees
		.map(attendee => {
			if(meeting.roles[attendee.role].salary == null || attendee.count == null)
				return 0;

			return meeting.roles[attendee.role].salary * attendee.count;
		})
		.reduce((a,b) => a + b, 0);

	var costPerHour = annualSalaryCombined / (228 * 8);
	return (costPerHour * (meeting.meetingLength / 60));
}

export default calculateCost;