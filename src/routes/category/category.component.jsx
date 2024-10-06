import './category.styles.scss';

import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
    const { category } = useParams();
    console.log(category);
    const { categories_mp } = useContext(CategoriesContext);

    // Initialize products as an empty array if categories_mp[category] is undefined
    const [products, setProducts] = useState(categories_mp[category] || []);

    useEffect(() => {
        // Only set products if categories_mp[category] is defined
        if (categories_mp[category]) {
            setProducts(categories_mp[category]);
        } else {
            setProducts([]); // Set to an empty array if undefined
        }
    }, [categories_mp, category]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    );
}

export default Category;
