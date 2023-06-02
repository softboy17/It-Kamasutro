import React from 'react'
import MyPost from './MyPost'
import { addPostActionCreator, updateNewPostText } from '../../../../redux/profile-reducer'
import StoreContext from '../../../../StoreContext'

export default function MyPostsContainer() {



  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState()
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }
        let onPostChange = (text) => {
          store.dispatch(updateNewPostText(text))
        }
        return (<MyPost
          updateNewPostText={onPostChange}
          addPostActionCreator={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText} />
        )
      }}
    </StoreContext.Consumer>
  )
}
