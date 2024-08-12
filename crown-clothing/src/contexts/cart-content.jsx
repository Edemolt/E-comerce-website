import { createContext, useState, useEffect } from "react";

// helper function to find in the aRRAY any items that match the product id of the new product 
// if found item += 1
// else add new item in the cart
const add_cart_item = ( cart_items, product_to_add) => { // recieves the cart itmes array and the product to add
    // find if the cart items contains the product to add
        // if found update the quantity
    
    const existing_cart_item = cart_items.find( (cart_item) => cart_item.id === product_to_add.id ); 
    console.log(existing_cart_item);
    if(existing_cart_item){
        return cart_items.map( (cart_item) => cart_item.id === product_to_add.id ?
             {...cart_item, quantity : cart_item.quantity  + 1} : cart_item  
        )
    } 
    console.log("adding new product");
    // return new array with modified cart itenms or new cart items
    // [{...product_to_add, quantity : 1}]
    return [...cart_items, {...product_to_add, quantity : 1}];

}

export const CartContext = createContext({
    is_cart_open : false,
    set_cart_open : () => {},
    cart_items : [],
    add_item_to_cart : () => {},
    cart_cnt : 0
});

export const CartProvider = ({children}) => {
 
    const [is_cart_open, set_cart_open] = useState(false);
    // const value = { is_cart_open, set_cart_open };1
    const [cart_items, set_cart_items] = useState([]);

    const [ cart_cnt, set_cart_cnt ] = useState(0);

    useEffect( () => {
        const new_cart_cnt = cart_items.reduce( (total, cart_item) => {
            return total + cart_item.quantity;
        }, 0);
        set_cart_cnt(new_cart_cnt);
    }, [cart_items]);

    const add_item_to_cart = (product_to_add) => {
        // here we need to check if the item is present and simply item += 1
        // or add a new Element in the cart

        // set cart_items value to the newest up to date array
        console.log("sending to add_cart_item");

        set_cart_items(add_cart_item(cart_items, product_to_add));

        console.log("added");
        console.log(cart_items);
    }

    const value = {is_cart_open, set_cart_open, add_item_to_cart, cart_items, cart_cnt};
 
    return( <CartContext.Provider value={value}>{children}</CartContext.Provider> )
}