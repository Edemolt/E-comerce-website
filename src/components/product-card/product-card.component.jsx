import { Fragment } from 'react';
import './product-card.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-content';

import Button from '../button/button.component';

const ProductCard = ({product}) => {    

    
    const {name, price, imageUrl} = product;
    const { add_item_to_cart } = useContext(CartContext);

    const add_product_to_cart = () => add_item_to_cart(product)

    return(
        <Fragment>
            <div className='product-card-container'>
                <img src={imageUrl} alt="" />
                <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <Button button_type={'inverted'} onClick = { add_product_to_cart }>{console.log('adding ...')}Add to cart</Button>
            </div>
        </Fragment>
    )
}

export default ProductCard;