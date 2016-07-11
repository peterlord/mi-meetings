export const ADD_MEETING = 'ADD_MEETING';

export default function(meeting){
	return {
		type: ADD_MEETING,
		meeting
	}
}