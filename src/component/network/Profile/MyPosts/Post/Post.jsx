import React from 'react';
import classes from "../../MyPosts/Post/Post.module.css";

const Post = (props) => {
    return (
            <div>
                <div className={classes.first_post}>
                    <img src="https://64.media.tumblr.com/721aeb445601c2aa2ffeb80a5b2eb9ba/b6d2c8f753090c95-b5/s400x600/17a737caa2857d882095b7ac37a27b671b691353.png" alt="gwen"/>
                    <p>{props.name} {props.age}</p>
                </div>
                <div className={classes.first_post}>
                    <img src = {props.src} alt= {props.alt}/>
                    <p>{props.age}</p>
                </div>
            </div>
    );
};

export default Post;