import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-content';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cart_items, total} = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {cart_items.map( (item) => {
                    return(
                        <CheckoutItem key={item.id} cartItem={item} />
                    )
                })}
                <span className='Total'>Total : {total}</span>
            </div>
    );
};

export default Checkout;