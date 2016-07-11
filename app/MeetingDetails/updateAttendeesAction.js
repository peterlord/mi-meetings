export const UPDATE_ATTENDEES = 'UPDATE_ATTENDEES';

export default function(attendees){
	return {
		type: UPDATE_ATTENDEES,
		attendees
	}
}