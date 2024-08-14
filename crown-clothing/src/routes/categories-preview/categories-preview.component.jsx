import {useContext, Fragment } from 'react'
// import SHOP_DATA from '../../shop-data/shop-data.json' 

import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categories_mp} = useContext(CategoriesContext );
    return(
        <Fragment>
            { Object.keys(categories_mp).map( (title) => {
                const products = categories_mp[title];
                return(
                    <CategoryPreview key={title} title={title} products={products}/> 
                    )
                }
            )};
        </Fragment>
    )
}


export default CategoriesPreview;