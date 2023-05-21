import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    return (<div className={classes.item + ' ' + classes.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Dimysh' },
        { id: 2, name: 'Musa' },
        { id: 3, name: 'Bema' },
        { id: 4, name: 'Adele' },
        { id: 5, name: 'Daka' },
    ]
    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'How old are you' },
        { id: 4, message: 'Yoooo' }

    ]
    let dialogsElements = dialogsData
        .map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));


    let messageElements = messageData
        .map(message => (<Message message={message.message} id={message.id} />))

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {
                    dialogsElements
                }
            </div>
            <div className={classes.messages}>
                {
                    messageElements
                }
            </div>
        </div>
    );
};

export default Dialogs;