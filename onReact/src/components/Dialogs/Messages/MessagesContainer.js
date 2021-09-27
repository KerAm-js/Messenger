import React from 'react'; 
import Messages from './Messages';
import { connect } from 'react-redux';
import { 
  sendMessageAC, updateNewMessageTextAC 
} from '../../../Redux/dialogs-reducer';

const mapStateToProps = state => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText, 
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    updateNewMessageText: (newText) => {
      dispatch(updateNewMessageTextAC(newText));
    },
  };
};

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer;