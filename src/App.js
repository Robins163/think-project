import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {Routes, Route} from 'react-router-dom';
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
    const user = useSelector(selectUser);


  return (
    <div className="App container mx-auto px-2">
        <div>


            <Routes>
                <Route path='/' element={user ? <Home/> : <Login/>} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/edit-user/:id' element={<EditUser />} />
            </Routes>
        </div>

    </div>
  );
}

export default App;
