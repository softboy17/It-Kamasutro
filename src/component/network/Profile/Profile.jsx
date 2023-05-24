import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPost posts = {props.profilePage.posts} 
            newPostText={props.profilePage.newPostText} 
            addPost = {props.addPost}
            updateNewPostText = {props.updateNewPostText}/>

            
        </div>
    );
};

export default Profile;