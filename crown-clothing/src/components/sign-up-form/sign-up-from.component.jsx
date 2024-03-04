
import { useState, useContext } from "react"

import { create_auth_user_with_email_and_password, create_user_doc_from_auth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-unput.component";

import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import './sign-up-form.styles.scss'

// can use 4 objects for 4 feilds, but no... we will make an object cause.. why the bloody not
const default_form_feilds = {
    display_name : '',
    email : '',
    password : '',
    confirm_password : '',
}


const SignUpForm = () => {

    const [form_feilds, set_form_feilds] = useState(default_form_feilds);
    const {display_name, email, password, confirm_password} = form_feilds;

    // const { set_current_user } = useContext(UserContext);

    // console.log(`hit`);
    // console.log(form_feilds);

    // const val = useContext(UserContext);

    // resets the form after the user is generated and stored in firebase
    const reset_form_feilds = () => {
        set_form_feilds(default_form_feilds);
    }

    const handle_change = (event) => {
        const {name, value} = event.target;

        set_form_feilds({...form_feilds, [name] : value})
    } 

    const handle_submit = async (event) => {
        event.preventDefault() // i dont wont any default behaviour of the form... do what i want 

        if(password != confirm_password){
            alert('passwords do not match');
            return;
        }

        try{
            const { user } = await create_auth_user_with_email_and_password(email, password);

            await create_user_doc_from_auth(user, {display_name});

            // set_current_user(user);
            reset_form_feilds();
        }catch(error){
            if(error.code == 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }else{
                console.log(`user creation encountered an error`, error);
            }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Do not have an account ?</h2>
            <span>Sign Up with your email and password</span>
            <form action="" onSubmit={handle_submit}>
                
                {/* <label htmlFor="">Name</label> */}
                <FormInput label='Display Name' required type="text" onChange={handle_change} name = 'display_name' value={display_name} />

                {/* <label htmlFor="">Email</label> */}
                <FormInput label='Email' required type="email" onChange={handle_change} name = 'email' value={email}/>

                {/* <label htmlFor="">Password</label> */}
                <FormInput label='Password' required type="password" onChange={handle_change} name = 'password' value={password}/>

                {/* <label htmlFor="">Confirm password</label> */}
                <FormInput label='Confirm Password' required type="password" onChange={handle_change} name = 'confirm_password' value={confirm_password}/>

                <Button type="submit">SIGN THE BLOODY UP </Button>
            </form>
        </div>
    )
}

export default SignUpForm