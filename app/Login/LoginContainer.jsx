import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm.jsx';
import addUserAction from './addUserAction.js';
import { hashHistory } from 'react-router';


var LoginContainer = (props) => <LoginForm {...props}/>;

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch){
	return {
		onAddUser: (userName) => {
			dispatch(addUserAction(userName));

			hashHistory.push('/chat');
		}
	}
}

export default LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);