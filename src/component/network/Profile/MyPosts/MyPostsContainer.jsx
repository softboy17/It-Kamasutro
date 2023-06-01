import React from 'react'
import MyPost from './MyPost'
import { addPostActionCreator, updateNewPostText } from '../../../../redux/profile-reducer'

export default function MyPostsContainer(props) {
    let state = props.store.getState()

    let addPost = () => {   
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostText(text))
    }
  return (
    <div><MyPost 
    updateNewPostText={ onPostChange } 
    addPostActionCreator = {addPost} 
    posts= {state.profilePage.posts} 
    newPostText = {state.profilePage.newPostText}/></div>
  )
}
