import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';


const LoginForm = (props) => {
   const {fields: {userName}, handleSubmit, onAddUser } = props;

   return (
       <form onSubmit={handleSubmit((values) => onAddUser(values.userName))}>
           <input type="text" {...userName}/>
           <button type="submit">Login</button>
       </form>
   )
};

export default reduxForm({
	form: 'LoginForm',
	fields: ['userName']
})(LoginForm);

