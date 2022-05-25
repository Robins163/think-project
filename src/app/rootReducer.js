import userReducer from '../features/userSlice';
import userDetailsReducer from '../features/UserDetailsSlice';

const rootReducer = {

    user: userReducer,
    userDetails: userDetailsReducer
}

export default rootReducer;
