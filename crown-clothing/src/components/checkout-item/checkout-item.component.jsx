import { Fragment } from 'react';
import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-content';

const CheckoutItem = ({cartItem}) => {

    const { delete_item_from_cart,  add_item_to_cart, remove_item_from_cart } = useContext(CartContext);

    const delete_item_handler = () => delete_item_from_cart(cartItem)
    const add_item_handler = () => add_item_to_cart(cartItem);
    const remove_item_handler = () => remove_item_from_cart(cartItem);

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <Fragment>
            <div className='checkout-item-container'>
                <div className='image-container'>
                    <img src={imageUrl} alt={`${name}`} />
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className="arrow" onClick={ remove_item_handler  }>
                        &#10094;
                    </div>
                    <span className='value'>{quantity}</span>
                    <div className="arrow" onClick={  add_item_handler }>
                        &#10095;
                    </div>
                </span>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick={ delete_item_handler}>&#10005;</div>
            </div>
        </Fragment>
    )
}

export default CheckoutItem;