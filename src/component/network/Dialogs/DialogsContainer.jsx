import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessage } from '../../../redux/dialogs-reducer'

export default function DialogsContainer (props) {
        let state = props.store.getState().dialogsPage
    
    
        let onSendMessageClick = () => {
            props.store.dispatch(addMessageActionCreator())
        }
        let onNewMessageChange = (body) => {
            props.store.dispatch(updateNewMessage(body))
        }    
  return (
    <div>
        <Dialogs updateNewMessage = {onNewMessageChange} sendMessage = {onSendMessageClick}
        dialogsPage = {state} />
        </div>
  )
}
