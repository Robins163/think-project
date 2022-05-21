import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";

const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault()

        dispatch(logout())
    }

    return (
        <>
            <div>
                <button type="button" className="btn btn-secondary" onClick={(e)=>{handleLogout(e)}}>Logout</button>
            </div>
            </>
    )
}

export default Logout;
