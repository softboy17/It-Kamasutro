let store = {
    _state: {
        profilePage: {
            posts: [{ id: 1, name: 'Gwennn', age: 17, src: 'https://64.media.tumblr.com/721aeb445601c2aa2ffeb80a5b2eb9ba/b6d2c8f753090c95-b5/s400x600/17a737caa2857d882095b7ac37a27b671b691353.png', alt: 'gwen' },
            { id: 2, name: 'Risa', age: 17, src: 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg', alt: 'piter' },],
            newPostText: 'spider-man'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimysh' },
                { id: 2, name: 'Musa' },
                { id: 3, name: 'Bema' },
                { id: 4, name: 'Adele' },
                { id: 5, name: 'Daka' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'How old are you' },
                { id: 4, message: 'Yoooo' }

            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    subscribe(obserber) {
        this._callSubscriber = obserber
    },
    addPost() {
        let newPost = {
            id: 3,
            name: this._state.profilePage.newPostText,
            age: 17,
            src: 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg',
            alt: 'piter'

        }
        this._callSubscriber(this._state)
        this._state.profilePage.newPostText = ''
        this._state.profilePage.posts.push(newPost)

    },
    updateNewPostText(newText) {
        this._callSubscriber(this._state)
        this._state.profilePage.newPostText = newText

    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 3,
                name: this._state.profilePage.newPostText,
                age: 17,
                src: 'https://64.media.tumblr.com/f4b778464a57f9080445f30547e38b10/1e569c61da8b911b-c4/s540x810/f89b06211af7f036ab26fd787b50d20d47885d9f.jpg',
                alt: 'piter'
    
            }
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = ''
            this._state.profilePage.posts.push(newPost)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = action.newText
        }

    }

}







export default store