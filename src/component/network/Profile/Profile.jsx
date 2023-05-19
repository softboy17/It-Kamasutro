import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import Post from "./MyPosts/Post/Post";
import Icon from '../../../asserts/spider-man.jpeg'

const Profile = (props) => {
    

    return (
            <div className={classes.content}>
                <div>
                    <img src="https://www.film.ru/sites/default/files/filefield_paths/2250544a1e.jpg" alt="content"/>
                </div>
                <div className={classes.ava}>
                    <img src= {Icon} alt = {props.alt}/>
                    <p>​a US cartoon character in Marvel Comics, created in 1962 by Stan Lee and Steve Ditko.<br/> He is Peter Parker, a newspaper photographer who changes into Spider-Man to fight criminals.<br/> He has great strength and can climb buildings. <br/>He has also appeared in films and television cartoons.</p>
                </div>
               <MyPost/>

                <Post name= 'Risa' age = '17' src= 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg' alt='piter'/>
            </div>
    );
};

export default Profile;