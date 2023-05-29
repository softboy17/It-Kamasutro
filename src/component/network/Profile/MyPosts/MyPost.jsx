import React from 'react';
import Post from './Post/Post';
import classes from './MyPost.module.css'

const MyPost = (props) => {
    let postElements =
        props.posts.map(p => <Post name={p.name} age={p.age} src={p.src} alt={p.alt} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'ADD-POST', text: text})
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (

        <div className={classes.my_post}>
            <h3>My posts</h3>
            <input type="text" onChange={onPostChange} placeholder='your news..' ref={newPostElement} value={props.newPostText} />
            <button onClick={addPost}>SEND</button>
            {
                postElements
            }
        </div>

    );
};

export default MyPost;