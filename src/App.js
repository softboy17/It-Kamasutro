import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./component/network/Header/Header";
import Navbar from "./component/network/Navbar/Navbar";
import Profile from "./component/network/Profile/Profile";
import DialogsContainer from "./component/network/Dialogs/DialogsContainer";
import UsersContainer from "./component/network/Users/UsersContainer";


function App(props) {
    return (

        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/dialogs" element={<DialogsContainer/>} />
                    <Route path="/users" element={<UsersContainer/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
