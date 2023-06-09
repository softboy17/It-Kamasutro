const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimysh' },
        { id: 2, name: 'Musa' },
        { id: 3, name: 'Bema' },
        { id: 4, name: 'Adele' },
        { id: 5, name: 'Daka' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'How old are you' },
        { id: 4, message: 'Yoooo' }

    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
       return {
          ...state,
          newMessageBody: action.body
        }
      case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {
          ...state,
          newMessageBody: '',
          messages: [...state.messages, {id: 5, message: body}]
        };
      default:
        return state;
    }
  };
  
  export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE
    };
  };
  
  export const updateNewMessage = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: text
    };
  };
  
  export default dialogsReducer;
  