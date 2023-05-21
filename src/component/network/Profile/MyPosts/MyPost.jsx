import React from 'react';
import Post from './Post/Post';
import classes from './MyPost.module.css'

const MyPost = () => {
    let postData = [
        { id: 1, name: 'Gwen', age: 17, src: 'https://64.media.tumblr.com/721aeb445601c2aa2ffeb80a5b2eb9ba/b6d2c8f753090c95-b5/s400x600/17a737caa2857d882095b7ac37a27b671b691353.png', alt: 'gwen' },
        { id: 2, name: 'Risa', age: 17, src: 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg', alt: 'piter' },

    ]
    let postElements = postData
        .map(post => <Post name={post.name} age={post.age} src={post.src} alt={post.alt} />)
    return (

        <div className={classes.my_post}>
            <h3>My posts</h3>
            <input type="text" placeholder='your news..' />
            <button>SEND</button>
            {
                postElements
            }
        </div>

    );
};

export default MyPost;