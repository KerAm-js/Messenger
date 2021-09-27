const SEND_MESSAGE = 'SEND-MESSAGES';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  messages: [
    {id: 0, text:'Hi, how are you'},
  ],
  newMessageText: 'new message',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages[-1].id + 1,
          text: state.newMessageText, 
        }],
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    default: 
      return state;
  };
};

export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageTextAC = (newMessageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText,
  };
};

export default messagesReducer;