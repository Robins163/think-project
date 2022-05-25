import React, {useState} from "react";
import TextField from "./TextField";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from '../features/UserDetailsSlice'
import { v4 as uuidv4 } from 'uuid';


const AddUser = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name:'',
        email:'',
        description:''
    })


    const handleAddUser = () =>{
        setValues({
            name:'',
            email: '',
            description: ''
        })

        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,
            description: values.description
            })
        )

        navigate('/');
    }


    return (
        <>
            <div className='mt-10 max-w-xl mx-auto'>
                <TextField
                    label='Name'
                    value={values.name}
                    onchange={(e)=> setValues({...values, name: e.target.value})}
                    inputProps={{type: 'text', placeholder:'UserName'}}
                    />
                    <br/>

                <TextField
                    label='Email'
                    value={values.email}
                    onchange={(e)=> setValues({...values, email: e.target.value})}
                    inputProps={{type: 'email', placeholder:'Email'}}
                />

                <TextField
                    label='Description'
                    value={values.description}
                    onchange={(e)=> setValues({...values, description: e.target.value})}
                    inputProps={{type: 'email', placeholder:'Description'}}
                />


                <button onClick={handleAddUser}>Submit</button>
            </div>
            </>
    )
}

export default AddUser;
