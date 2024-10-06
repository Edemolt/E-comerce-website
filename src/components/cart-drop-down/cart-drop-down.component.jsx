import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart-content';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component'

import './cart-drop-down.styles.scss'
const CartDropDown = () => {
    const navigate = useNavigate();
    // mapping over cart context
    const { cart_items } = useContext(CartContext);

    const go_to_checkout = () => navigate('/checkout');

    return(
        <Fragment>
            <div className="cart-dropdown-container">
                <div className="cart-items" >
                    { cart_items.map( ( item ) => (
                        <CartItem key={item.id} cart_item={ item }/>
                    )) }
                </div>
                <Button onClick={go_to_checkout}> Checkout</Button>
            </div>
        </Fragment>
    )
}

export default CartDropDown;