import React from 'react';
import classes from './MyPost.module.css'

const MyPost = () => {
    return (

                <div className={classes.my_post}>
                    <h3>My posts</h3>
                    <input type="text" placeholder='your news..'/>
                    <button>SEND</button>

                </div>

    );
};

export default MyPost;