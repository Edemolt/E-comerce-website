import { useEffect, useReducer } from "react";
import { createContext } from "react";

import { on_auth_state_changed_listener, sign_the_user_out } from "../utils/firebase/firebase.utils";
// context is 2 peices -> 
// 1. the actual storage thing itself... the literal context

// the actual value u want to access
export const UserContext = createContext({ // we pass the default value to it
    current_user : null,
    set_current_user : () => null,
}) ;

export const USER_ACTION_TYPES = {
    "SET_CURRENT_USER": "SET_CURRENT_USER",
    "INCREMENT": "INCREMENT"
};

const userReducer = ( state, action ) => {
    console.log(`dispatch`);
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                current_user: payload
            }
        case "increment":
            return state.value + 1;
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
    
}

const INITIAL_STATE = {
    current_user: null,
}

// 2. provider-> it is the actual component
export const UserProvider = ({children}) => { // we reciuve children and we return the usercontext.provider

    // const [current_user, set_current_user] = useState(null);
    const [ state, dispatch] = useReducer( userReducer, INITIAL_STATE);

    const { current_user } = state;
    const set_current_user = (user) => dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});

    const value = {current_user, set_current_user};

    sign_the_user_out();

    useEffect( () => {
        const unsuscribe = on_auth_state_changed_listener( (user) => {
            console.log(user);
        });
        return unsuscribe;
    }, [])

    return <UserContext.Provider  
        value={value} // recieves the value where we store the actual context
    >
        {children}
    </UserContext.Provider>
}