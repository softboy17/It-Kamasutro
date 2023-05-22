import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPost posts = {props.state.posts}/>

            
        </div>
    );
};

export default Profile;