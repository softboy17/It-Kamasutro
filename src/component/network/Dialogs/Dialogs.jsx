import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
const Dialog = () => {
    <div className={classes.item + ' ' + classes.active}>
                    <NavLink to = "/dialogs/1"> Risa</NavLink>
                </div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
               <Dialog/>
                <div className={classes.item}>
                    <NavLink to = '/dialogs/2'> Risa</NavLink>
                   
                </div>
                <div className={classes.item}>
                    <NavLink to = '/dialogs/3'> Risa</NavLink>
                   
                </div>
                <div className={classes.item}>
                    <NavLink to = '/dialogs/4'>Risa</NavLink>
                    
                </div>
                <div className={classes.item}>
                    <NavLink to = '/dialogs/5'> Risa</NavLink>
                   
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}> Hi </div>
                <div className={classes.message}> How are you </div>
                <div className={classes.message}> How old are you </div>
            </div>
        </div>
    );
};

export default Dialogs;