import { createContext, useState, useEffect } from "react";

import { get_categories_and_documents } from "../utils/firebase/firebase.utils.jsx";
// import SHOP_DATA from '../shop-data/shop-data.js'

export const CategoriesContext = createContext({
    categories_mp : {},
});

export const CategoriesProvider = ({children}) => {
    const [categories_mp, set_categories_mp] = useState({});


    // Never to uncommented -> ☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠
    // // useEffect(() => {
    //     //     add_collection_and_documents('categories', SHOP_DATA);
    //     // }, []);
    // Never to uncommented -> ☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠


    useEffect(() => {
        const get_categories_mp = async () => {
            const category_mp = await get_categories_and_documents();
            console.log(category_mp);
            set_categories_mp(category_mp);
        }
        get_categories_mp();
    }, []);

    const value = {categories_mp};
    return(
        <CategoriesContext.Provider 
            value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}  