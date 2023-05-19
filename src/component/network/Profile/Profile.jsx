import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import Post from "./MyPosts/Post/Post";
import Icon from '../../../asserts/spider-man.jpeg';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    

    return (
            <div className={classes.content}>
                <ProfileInfo/>
               <MyPost/>

                <Post name= 'Risa' age = '17' src= 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg' alt='piter'/>
            </div>
    );
};

export default Profile;