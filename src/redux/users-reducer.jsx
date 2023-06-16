    
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
let initialState = {
    users: [
            {id: 1, photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1643018590_23-abrakadabra-fun-p-zhivie-oboi-mailz-morales-39.jpg' , followed: false, fullName: 'Dmitry', status: 'I am looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2,  photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1643018590_23-abrakadabra-fun-p-zhivie-oboi-mailz-morales-39.jpg' , followed: true, fullName: 'Dasha', status: 'I have a job', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3,  photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1643018590_23-abrakadabra-fun-p-zhivie-oboi-mailz-morales-39.jpg' , followed: false, fullName: 'Nikita', status: 'I am looser', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u 
                })    
                } 
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if(u.id === action.userID){
                    return {...u, followed: false}
                }
                return u 
            })    
            } 
            case SET_USERS:
                return{
                    ...state, users: [...state.users,  ...action.users]
                }
      default:
        return state;
    }
  };
  export const followAC = (userID) => {
    return {
        type: FOLLOW, userID
    } 
}
export const unfollowAC = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}
  export default usersReducer;