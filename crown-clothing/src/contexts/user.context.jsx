import { useState, useEffect } from "react";
import { createContext } from "react";

import { on_auth_state_changed_listener, sign_the_user_out } from "../utils/firebase/firebase.utils";
// context is 2 peices -> 
// 1. the actual storage thing itself... the literal context

// the actual value u want to access
export const UserContext = createContext({ // we pass the default value to it
    current_user : null,
    set_current_user : () => null,
}) ;

// 2. provider-> it is the actual component
export const UserProvider = ({children}) => { // we reciuve children and we return the usercontext.provider

    const [current_user, set_current_user] = useState(null);

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