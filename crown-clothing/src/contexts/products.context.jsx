import { createContext, useState } from "react";


import Products from '../shop-data/shop-data.json'

export const ProductsContext = createContext({
    products : [],
});

export const ProductsProvider = ({children}) => {
    const [products, set_products] = useState(Products);

    const value = {products};
    return(
        <ProductsContext.Provider 
            value={value}>
            {children}
        </ProductsContext.Provider>
    )
}  