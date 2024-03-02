import { Fragment } from "react"

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { create_user_doc_from_auth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const users_credentials = await signInWithGooglePopup();
        // the response is the user details
        // console.log(resp);
        const user = users_credentials.user
        const user_documnet_referrence = await create_user_doc_from_auth(user)
    }

    return(
        <Fragment>
            <div>
                <h1> Sign-In Page </h1>
                <button onClick={logGoogleUser}>Sign in  with Google Pop Up</button>
            </div>
        </Fragment>
    )
}

export default SignIn;