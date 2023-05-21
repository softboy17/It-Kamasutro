import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css'


export default function Dialogitem(props){
           return (<div className={classes.item + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
        )
    }