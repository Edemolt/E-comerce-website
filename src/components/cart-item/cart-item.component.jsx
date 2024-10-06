import { Fragment } from 'react'
import './cart-item.styles.scss'

const CartItem = ({cart_item}) => {
    const {name, imageUrl, price, quantity} = cart_item;
    return(
        <Fragment>
            <div className='cart-item-container'>
                <img src={imageUrl} alt={`${name}`}/>
                <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span className='price'>{quantity} x ${price}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default CartItem