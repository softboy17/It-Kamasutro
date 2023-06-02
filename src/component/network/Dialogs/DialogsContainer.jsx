import { sendMessageActionCreator, updateNewMessage } from '../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

// export default function DialogsContainer() {

//     return (
    
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage


//                     let onSendMessageClick = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessage(body))
//                     }
//                     return (

//                         <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick}
//                             dialogsPage={state} />
//                     )
//                 }
//             }

//     )
// }
const mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: () => {
        dispatch(sendMessageActionCreator())
      },
      updateNewMessage: (body) => {
        dispatch(updateNewMessage(body))
      }
    }
  }
  
  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
  
  export default DialogsContainer


