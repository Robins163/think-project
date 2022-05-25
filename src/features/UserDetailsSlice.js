import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: "1", name:"Robin", email: 'robin@mail.com', description: 'Nostrud  aute irure dolor in reprehenderit in voluptate velit esse cillum atur.'},
    {id: "2", name:"Robert", email: 'robert@mail.com', description: 'Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'}

]


const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        addUser: (state,action) => {
            state.push(action.payload)
        },

        editUser: (state, action) => {
            const {id, name, email, description} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
                existingUser.name = name;
                existingUser.email = email;
                existingUser.description = description
            }

        },
        deleteUser: (state,action) => {
            const {id} = action.payload

            const existingUser = state.find(user => user.id === id);

            if(existingUser){
                return state.filter(user => user.id !== id);
            }
        }
    }
});

export const {addUser, editUser, deleteUser} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
