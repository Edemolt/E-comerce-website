// there will be 3 buttons

// default button
// inverted button

// google sign in button

import './button.styles.scss'

const BUTTON_TYPES_CLASSES = {
    google : 'google-sign-in', 
    inverted : 'inverted'
}

const Button = ({children, button_type, ...ohter_properties}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES_CLASSES[button_type]}`} {...ohter_properties}>
            {children}
        </button>
    )
}

export default Button;