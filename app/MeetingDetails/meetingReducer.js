import { ADD_MEETING } from './updateAttendeesAction';
import { COSTS_UPDATED } from './costUpdatedAction'

const initialState = {
	showCosts: false,
	attendees: [{
		id: 1,
		role: "Engineer",
		count: 1
	}],
	roles: [
	{
		id: 1,
		role: "Engineer",
		salary: 30000
	},
	{
		id: 2,
		role: "Sales",
		salary: 30000
	}]

}

function meetingReducer (state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_ATTENDEES':
			return {
				...state,
				attendees: action.attendees
			}
		case 'SHOW_COSTS':
			return {
				...state,
				showCosts: action.showCosts
			}
		case 'MEETING_LENGTH_UPDATED':
			return {
				...state,
				meetingLength: action.meetingLength
			}
		case 'COSTS_UPDATED':
			return {
				...state,
				cost: action.cost
			}
		default: 
			return state;
	}
}

export default meetingReducer;