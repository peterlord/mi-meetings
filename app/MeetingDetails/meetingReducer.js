import { ADD_MEETING } from './updateAttendeesAction';
import { COSTS_UPDATED } from './costUpdatedAction';
import calculateCost from './calculateCost';

const initialState = {
	showCosts: false,
	attendees: [],
	roles: [
	{
		id: 0,
		role: "Engineer",
		salary: 30000
	},
	{
		id: 1,
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
				cost: calculateCost(state)
			}
		default: 
			return state;
	}
}



export default meetingReducer;