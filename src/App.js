import React from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./component/network/Header/Header";
import Navbar from "./component/network/Navbar/Navbar";
import Profile from "./component/network/Profile/Profile";
import Dialogs from "./component/network/Dialogs/Dialogs";


function App(props) {
    return (
        
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
            <Routes>
            <Route path="/profile" element={ <Profile state = {props.state.profilePage}/> }/>
            <Route path="/dialogs" element={ <Dialogs state = {props.state.dialogsPage} addPost= {props.addPost}/>}/>
            </Routes>
            </div>    
        </div>
    );
}

export default App;
