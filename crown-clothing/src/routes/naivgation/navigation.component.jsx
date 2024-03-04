import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import {ReactComponent as CrownLogo} from '../../assests/crown.svg'

import { UserContext } from "../../contexts/user.context"

import { sign_the_user_out } from "../../utils/firebase/firebase.utils"

import './navigation.styles.scss'

const Navigation = () => {

  const {current_user, 
    // set_current_user,
  }
   = useContext(UserContext);
  console.log(current_user);

  // const sign_out_handler = async () => {
  //   await sign_the_user_out();
  //   set_current_user( null );
  // }

    return(
      <Fragment>
        <div className="navigation">
         <Link className="logo-container" to = '/'>
            <CrownLogo className="logo"/>
         </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to = '/shop'>SHOP</Link>
            {
              current_user ? 
                (<span className="nav-link" onClick={sign_the_user_out}>SIGN-OUT</span>)
                  : 
                (<Link className="nav-link" to = '/auth '>SIGN-IN</Link>)
            }
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation