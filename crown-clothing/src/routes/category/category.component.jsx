import './category.styles.scss';

import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
    const {category} = useParams();
    const { categories_mp } = useContext(CategoriesContext);

    const [products, setProducts] = useState([categories_mp[category]]);

    useEffect( () => {
        setProducts(categories_mp[category]);
    }, [categories_mp, category]);
    // console.log(`working on it my man`);
    return(
        <div className='category-container'>
            {   products && 
                products.map( (product) => {
                    return <ProductCard key={product.id} product={product}/>
                })
            
            }
        </div>
    )
}

export default Category;