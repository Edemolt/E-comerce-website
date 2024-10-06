import './cart-icon.styles.scss'

import { ReactComponent as ShoppingCartIcon} from '../../assests/shopping-bag.svg'
import { Fragment } from 'react';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-content';

const CartIcon = () => {

    const { is_cart_open, set_cart_open, cart_cnt } = useContext(CartContext);

    const toggle_cart_open = () => {
        return(
            set_cart_open(!(is_cart_open))
        )
    }

    return(
        <Fragment>
            <div className='cart-icon-container' onClick={toggle_cart_open}>
                <ShoppingCartIcon className='shopping-icon'/>
                <span className='item-count'>{cart_cnt}</span>
            </div>
        </Fragment>
    )
}

export default CartIcon;