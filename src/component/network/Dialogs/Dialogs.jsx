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
        { id: 1, name: 'Dimysh'},
        { id: 2, name: 'Musa'},
        { id: 3, name: 'Bema'},
        { id: 4, name: 'Adele'},
        { id: 5, name: 'Daka'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'How old are you'}
        
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id= {dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id= {dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id= {dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id= {dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id= {dialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message} id = {messageData[0].id} />
                <Message message={messageData[1].message} id = {messageData[1].id} />
                <Message message={messageData[2].message} id = {messageData[2].id} />
            </div>
        </div>
    );
};

export default Dialogs;