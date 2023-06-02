
import MyPost from './MyPost'
import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer'


// export default function MyPostsContainer() {



//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         let state = store.getState()
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }
//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostText(text))
//         }
//         return (<MyPost
//           updateNewPostText={onPostChange}
//           addPostActionCreator={addPost}
//           posts={state.profilePage.posts}
//           newPostText={state.profilePage.newPostText} />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }
let mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()) },
    updateNewPosts: (text) => { dispatch(updateNewPostTextActionCreator(text)) }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostsContainer