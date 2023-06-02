import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessage } from '../../../redux/dialogs-reducer'
import StoreContext from '../../../StoreContext'

export default function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage


                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessage(body))
                }
                return (

                    <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick}
                        dialogsPage={state} />
                )
            }
        } 
        </StoreContext.Consumer>

    )
}
