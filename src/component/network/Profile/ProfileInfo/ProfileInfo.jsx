import React from 'react'
import classes from './ProfileInfo.module.css';
import Icon from '../../../../asserts/spider-man.jpeg';

export default function ProfileInfo(props) {
  return (
    <div>
      <div>
        <img src="https://www.film.ru/sites/default/files/filefield_paths/2250544a1e.jpg" alt="content" />
      </div>
      <div className={classes.ava}>
        <img src={Icon} alt={props.alt} />
        <p>​a US cartoon character in Marvel Comics, created in 1962 by Stan Lee and Steve Ditko.<br /> He is Peter Parker, a newspaper photographer who changes into Spider-Man to fight criminals.<br /> He has great strength and can climb buildings. <br />He has also appeared in films and television cartoons.</p>
      </div>
    </div>
  )
}
