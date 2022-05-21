import './App.css';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function App() {
    const user = useSelector(selectUser);

  return (
    <div className="App">
        <div>
            {user ? <Home/> : <Login/>}

        </div>

    </div>
  );
}

export default App;
