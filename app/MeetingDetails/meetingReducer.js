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
		role: "C-level",
		salary: 100000
	},
	{
		id: 1,
		role: "Sales",
		salary: 35000
	},
	{
		id: 2,
		role: "Operations",
		salary: 38000
	},
	{
		id: 3,
		role: "Tech, Data",
		salary: 65000
	},
	{
		id: 4,
		role: "Marketing",
		salary: 30000
	},
	{
		id: 5,
		role: "Admin and support roles",
		salary: 29000
	},
	{
		id: 6,
		role: "Senior leaders",
		salary: 80000
	}],
	minutesElapsed: 0,
	liveCost: 0,
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
				started: true,
				minutesElapsed: 0
			}
		case 'INCREMENT_MEETING_MINUTES_ACTION':
			return {
				...state,
				minutesElapsed: ++state.minutesElapsed,
				liveCost: ((state.cost / state.meetingLength) * state.minutesElapsed)
			}
		default: 
			return state;
	}
}



export default meetingReducer;