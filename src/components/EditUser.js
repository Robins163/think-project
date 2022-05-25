import React, {useState} from "react";
import TextField from "./TextField";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "../features/UserDetailsSlice";


const EditUser = () => {
    const params = useParams();
    const userDetails = useSelector(store => store.userDetails)

    const dispatch = useDispatch();
    const existingUser = userDetails.filter(user=> user.id === params.id);

    const {name, email, description} = existingUser[0];

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name:name,
        email:email,
        description:description
    })




    const handleEditUser = () =>{
        setValues({
            name:'',
            email: ''
        })
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email,
            description: values.description
        }))
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

                <button onClick={handleEditUser}>Edit</button>
            </div>
        </>
    )
}

export default EditUser;
