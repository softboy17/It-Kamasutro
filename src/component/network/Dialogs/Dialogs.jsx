import React from 'react';
import classes from './Dialogs.module.css'
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogs.map(d => (<Dialogitem name={d.name} id={d.id} />));


    let messageElements =
       props.state.messages.map(m => (<Message message={m.message} id={m.id} />))

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