
import { useState, useContext } from "react"

import { 
    create_auth_user_with_email_and_password, 
    create_user_doc_from_auth, 
    signInWithGooglePopup,
    sign_in_auth_user_with_email_and_password,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-unput.component";

import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import './sign-in-form.styles.scss'

// can use 4 objects for 4 feilds, but no... we will make an object cause.. why the bloody not
const default_form_feilds = {
    email : '',
    password : '',
}

const SignInForm = () => {

    const [form_feilds, set_form_feilds] = useState(default_form_feilds);
    const { email, password, confirm_password} = form_feilds;

    // const { set_current_user } = useContext(UserContext);

    // console.log(form_feilds);

    // resets the form after the user is generated and stored in firebase
    const reset_form_feilds = () => {
        set_form_feilds(default_form_feilds);
    }

    const sign_in_with_google = async () => {
        const users_credentials = await signInWithGooglePopup();
        // the response is the user details
        // console.log(resp);
        const user = users_credentials.user
        await create_user_doc_from_auth(user)
        // console.log('settinhg current user');
        // set_current_user(user);
        // console.log('sett current user');
    }


    const handle_change = (event) => {
        const {name, value} = event.target;

        set_form_feilds({...form_feilds, [name] : value})
    } 

    const handle_submit = async (event) => {
        event.preventDefault() // i dont wont any default behaviour of the form... do what i want 


        try{
            const {user} = await sign_in_auth_user_with_email_and_password(email, password)
            // console.log('running');
            // set_current_user(user);
            // console.log('ran');
            // console.log(response);
            reset_form_feilds();
        }catch(error){
            if(error.code === "auth/wrong-password"){
                alert('incorrect password or mail');
            }else if(error.code === "auth/user-not-found"){
                alert('incorrect password or mail | user does not exist tbh');
            }else{
                console.log(error);
            } 
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign In with your email and password</span>
            <form action="" onSubmit={handle_submit}>

                {/* <label htmlFor="">Email</label> */}
                <FormInput label='Email' required type="email" onChange={handle_change} name = 'email' value={email}/>

                {/* <label htmlFor="">Password</label> */}
                <FormInput label='Password' required type="password" onChange={handle_change} name = 'password' value={password}/>
 
                <div className="buttons-container">
                    <Button type="submit">SIGN IN</Button>
                    <Button type='button' button_type = {'google'} onClick = {sign_in_with_google}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm