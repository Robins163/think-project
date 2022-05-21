import React, {useState} from "react";
import './Login.css'
import {useDispatch} from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn: true,
        }))

    }




    return (
        <>
            <div className='login'>
                <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                    <h1>Login Page</h1>
                    <input name='name'
                           placeholder='Name'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <input name='email'
                           placeholder='Email ID'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}

                    />
                    <input name='password'
                           type='password'
                           placeholder='Password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}

                    />
                    <button type='submit' className='submit_btn'>Submit</button>
                </form>


            </div>


        </>

    )
}

export default Login;
