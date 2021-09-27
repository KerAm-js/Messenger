const SET_USERS = 'SET-USERS';
const SEND_MESSAGE = 'SEND-MESSAGES';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
  usersList: [],
  messages: [
    {id: 0, text:'Hi, how are you', time: '10:49'},
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        usersList: [...action.usersList]
      }
    case SEND_MESSAGE:
      let len = state.messages.length;
      let date = new Date();
      let time = date.toLocaleTimeString().slice(0,5);
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages[len-1].id + 1,
          text: state.newMessageText,
          sender: 'you',
          time,
        },],
        newMessageText: '',
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

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    usersList: users,
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

export default dialogsReducer;