import React from 'react';
import classes from "../../MyPosts/Post/Post.module.css";

const Post = (props) => {
    return (
            <div>
                <div className={classes.first_post}>
                    <img src= {props.src} alt = {props.alt}/>
                    <p>{props.name} {props.age}</p>
                </div>
            </div>
    );
};

export default Post;