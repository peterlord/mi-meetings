import React, {Proptypes} from 'react';
import {connect} from 'react-redux';
import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';
import ClearMessageAction from './clearMessageAction.js';

var id = 3;

class MessagesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MessagesContainer';
    }
    render() {
        return <div>
        	<MessageList {...this.props} />
            <MessageInput {...this.props} />
        </div>;
    }
}

function mapStateToProps (state) {
	return {
		messages: state.messages,
        messageText: state.messageText
	}
}

function mapDispatchToProps (dispatch) {
    return {
        onMessageTextChanged: (text) => dispatch({
            type: 'CHANGE_MESSAGE_TEXT',
            text: text
        }),
        onClickMessageAdd: (text) => {
            dispatch({
                type: 'ADD_MESSAGE_TEXT',
                message: {
                    id: ++id,
                    text: text
                }
            }),
            dispatch({
                type: 'CLEAR_MESSAGE_TEXT'
            })
        }

    }
}

MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)

export default MessagesContainer;
