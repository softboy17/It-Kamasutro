const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = { 
    posts: [{ id: 1, name: 'Gwennn', age: 17, src: 'https://64.media.tumblr.com/721aeb445601c2aa2ffeb80a5b2eb9ba/b6d2c8f753090c95-b5/s400x600/17a737caa2857d882095b7ac37a27b671b691353.png', alt: 'gwen' },
    { id: 2, name: 'Risa', age: 17, src: 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg', alt: 'piter' },],
    newPostText: 'spider-man'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:{
        let newPost = {
          id: 3,
          name: state.newPostText,
          age: 17,
          src: 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg',
          alt: 'piter'
        };
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = '';
        return stateCopy;
      }
        case UPDATE_NEW_POST_TEXT:{
          let stateCopy = {...state }
          stateCopy.newPostText = action.newText;
          return stateCopy;
        }
      default:
        return state;
    }
  };
  export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
  export default profileReducer