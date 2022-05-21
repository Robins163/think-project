import React from "react";
import Logout from "./Logout";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import './Home.css';


const Home = () => {
    const user = useSelector(selectUser)
    return (
        <>
            <div className='home_header'>
                <h1> HomePage <span>{user.email}</span></h1>
                <Logout/>
            </div>

            <table className="table table-dark table-hover">
                <thead>
                <button type="button" className="btn btn-primary">Add A Doc</button>
                <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Doc Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>

        </>
    )

}

export default Home;
