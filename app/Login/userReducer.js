import { ADD_USER } from './addUserAction';

function userReducer (state = {}, action) {
	switch (action.type) {
		case 'ADD_USER':
			return {
				...state,
				userName: action.userName
			};
		default: 
			return state;
	}
}

export default userReducer;