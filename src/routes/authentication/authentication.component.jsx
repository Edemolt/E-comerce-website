import { Fragment } from "react"

// for signInWithRedirect 👇
import { useEffect, useState } from "react";
import { getRedirectResult } from 'firebase/auth'

// import { 
//     auth,
//     signInWithGooglePopup,
//     signInWithGoogleRedirect,
//     create_user_doc_from_auth,
// } from "../../utils/firebase/firebase.utils";


import SignUpForm from "../../components/sign-up-form/sign-up-from.component";
import SignInForm from "../../components/sign-in-form/sign-in-from.component";

import './authentication.styles.scss'

const Authentication = () => {
    // WITH REDIRECT SHIT 👇
    // useEffect(() => {
    //     // i wish async would have worked, but no... need to make another function like this, cause making the entire useEffect async gives an error now
    //     const fetch_redirect_results = async () => {
    //         const response = await getRedirectResult(auth)
            
    //         if(response){
    //             const user = response.user;
    //             const user_documnet_referrence = await create_user_doc_from_auth(user);
    //             console.log(user_documnet_referrence);
    //         }
    //     };

    //     fetch_redirect_results();
    // }, [])

    // not gonna use this... to much gibber gabber 👆
    return(
        <Fragment>
            <div className="authentication-container">
                {/* <h1> Sign-In Page </h1>  */}
                {/* <button onClick={logGooglePopUpUser}>Sign in  with Google Pop Up</button> */}
                {/* <button onClick={signInWithGoogleRedirect}>Sign in  with Google Redirect</button> */}
                <SignInForm />
                <SignUpForm />
            </div>
        </Fragment>
    )
} 

export default Authentication;