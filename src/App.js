import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./component/network/Header/Header";
import Navbar from "./component/network/Navbar/Navbar";
import Profile from "./component/network/Profile/Profile";
import Dialogs from "./component/network/Dialogs/Dialogs";


function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
            <Routes>
            <Route path="/profile" element={ <Profile posts = {props.posts}/> }/>
            <Route path="/dialogs" element={ <Dialogs dialogs = {props.dialogs} messages = {props.messages}/>}/>
            </Routes>
            </div>    
        </div>
        </BrowserRouter>
    );
}

export default App;
