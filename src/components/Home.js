import React, {useEffect, useState} from "react";
import Logout from "./Logout";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import './Home.css';
import axios from "axios";
import {Link} from "react-router-dom";
import {useDetails} from '../features/UserDetailsSlice'
import {deleteUser} from "../features/UserDetailsSlice";


const Home = () => {
    const user = useSelector(selectUser)
    const userDetails = useSelector(store => store.userDetails)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(deleteUser({id:id}))
    }


    const renderCard = ()=> userDetails.map (user => (

        <div className='card bg-info my-3'  key={user.id}>
            <div className='card-body w-50 '>
                <h3 className='font-bold'>
                   Name: {user.name}
                </h3>
                <span className='font-monospace fw-bold'> Email: {user.email}</span>
                <div className='card-text'>
                   <span className='fw-bold'>Description: </span>{user.description}
                </div>

                <div className='container'>
                    <Link to={`edit-user/${user.id}`}>
                    <button className='col-lg-6'>
                        <i className="fa fa-pencil"></i>
                    </button>
                </Link>
                    <button className='col-lg-6'
                    onClick={()=> handleRemove(user.id)}
                    >
                        <i className="fa fa-trash"></i>

                    </button>
                </div>


            </div>

        </div>
        )
    )


    return (
        <>
            <div className='home_header mt-3'>
                <h1><span>{user.email} <Logout/> </span></h1>
            </div>
            <div>
                <Link to='/add-user'>
                    <button className='btn btn-primary'>Add User</button>
                </Link>


            </div>
            <div className='grid gap-5 md:grid-cols-2'>
                {userDetails.length ? renderCard() : <p className='text-center col-span-2 text-gray-700 font-monospace'> No Data Found</p>}

            </div>

        </>
    )

}

export default Home;
