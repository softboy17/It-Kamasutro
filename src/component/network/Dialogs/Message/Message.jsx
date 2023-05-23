import React from 'react';
import classes from '../Dialogs.module.css'

const Message = () => {
    
    
    let inputName = [ 'input1', 'input2', 'input3'];
    let buttonName  = ['btn1', 'btn2', 'btn3'];
    
    let inputRef = inputName.map(() => React.createRef());
    let addPost = (index) =>{
        let text = inputRef[index].current.value
        alert(text)
    }

    return(
        <div className={classes.message}>
        {inputName.map((name, index) => (
            <input
            key ={index}
            type = 'text'
            name = {name}
            ref = {inputRef[index]}/>
        ))}
        {buttonName.map((name, index) => (
            <button key={index} name={name} onClick={ () => addPost(index)} >SEND</button>
        ))}
        </div>
        
    )
}
export default Message