import { UserActionTypes } from './user.types';

//Instantiating the intial state of the user reducer

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER :
            return {
                ...currentState,
                currentUser: action.payload
            };
        default:
        return currentState;
    }
}

export default userReducer;
