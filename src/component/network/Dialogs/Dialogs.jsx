import React from 'react';
import classes from './Dialogs.module.css';
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <Dialogitem name={d.name} id={d.id} />
  ));

  let messageElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessage(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
