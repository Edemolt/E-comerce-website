import { Fragment, useContext } from 'react';

import { CartContext } from '../../contexts/cart-content';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component'

import './cart-drop-down.styles.scss'
const CartDropDown = () => {

    // mapping over cart context
    const { cart_items } = useContext(CartContext);

    return(
        <Fragment>
            <div className="cart-dropdown-container">
                <div className="cart-items" >
                    { cart_items.map( ( item ) => (
                        <CartItem key={item.id} cart_item={ item }/>
                    )) }
                </div>
                <Button> Checkout</Button>
            </div>
        </Fragment>
    )
}

export default CartDropDown;