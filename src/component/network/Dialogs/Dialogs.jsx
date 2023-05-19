import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
            return( <div className={classes.item + ' ' + classes.active}>
                    <NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
)}
const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div> 
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
               <DialogItem name= 'Dimysh' id = '1'/>
               <DialogItem name= 'Musa' id = '2'/>
               <DialogItem name= 'Bema' id = '3'/>
               <DialogItem name= 'Adele' id = '4'/>
               <DialogItem name= 'Daka' id = '5'/>                
            </div>
            <div className={classes.messages}>
                <Message message= 'Hi'/>
                <Message message= 'How are you '/>
                <Message message = 'How old are you'/>
            </div>
        </div>
    );
};

export default Dialogs;