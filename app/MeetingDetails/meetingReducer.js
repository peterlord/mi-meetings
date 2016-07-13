import { ADD_MEETING } from './updateAttendeesAction';
import { COSTS_UPDATED } from './costUpdatedAction';
import { START_MEETING } from './startMeetingAction';
import calculateCost from './calculateCost';

const initialState = {
	showCosts: false,
	attendees: [],
	roles: [
	{
		id: 0,
		role: "Engineer",
		salary: 40000
	},
	{
		id: 1,
		role: "Sales",
		salary: 35000
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
		case 'START_MEETING':
			return {
				...state,
				started: true
			}
		default: 
			return state;
	}
}



export default meetingReducer;