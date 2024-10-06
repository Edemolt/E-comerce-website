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
    // console.log("adding new product");
    console.log(cart_items);
    // return new array with modified cart itenms or new cart items
    // [{...product_to_add, quantity : 1}]
    return [...cart_items, {...product_to_add, quantity : 1}];

}

const remove_cart_item = (cart_items, product_to_remove) => {
    const existing_cart_item = cart_items.find( (cart_item) => cart_item.id === product_to_remove.id);
    if(existing_cart_item.quantity === 1){
        return cart_items.filter( (cart_item) => cart_item.id !== product_to_remove.id);
    }
    return cart_items.map( (cart_item) => cart_item.id === product_to_remove.id ?
        {...cart_item, quantity : cart_item.quantity - 1} : cart_item
    )
}

export const CartContext = createContext({
    is_cart_open : false,
    set_cart_open : () => {},
    cart_items : [],
    add_item_to_cart : () => {},
    remove_item_from_cart : () => {},
    delete_item_from_cart : () => {},
    cart_cnt : 0,
    total : 0
});

export const CartProvider = ({children}) => {
 
    const [is_cart_open, set_cart_open] = useState(false);
    // const value = { is_cart_open, set_cart_open };1
    const [cart_items, set_cart_items] = useState([]);

    const [ cart_cnt, set_cart_cnt ] = useState(0);

    const [ total, set_total ] = useState(0);

    useEffect( () => {
        const new_cart_cnt = cart_items.reduce( (total, cart_item) => {
            return total + cart_item.quantity;
        }, 0);
        set_cart_cnt(new_cart_cnt);
    }, [cart_items]);

    useEffect( () => {
        const new_cart_total = cart_items.reduce( (total, cart_item) => {
            return total + cart_item.quantity * cart_item.price;
        }, 0);
        set_total(new_cart_total);
    }, [cart_items]);

    const add_item_to_cart = (product_to_add) => {
        // here we need to check if the item is present and simply item += 1
        // or add a new Element in the cart

        // set cart_items value to the newest up to date array
        // console.log("sending to add_cart_item");

        set_cart_items(add_cart_item(cart_items, product_to_add));

        // console.log("added");
        // console.log(cart_items);
    }

    const remove_item_from_cart = (product_to_remove) => {
        // here we need to check if the item is present and simply item -= 1
        // or remove the item from the cart
        set_cart_items(remove_cart_item(cart_items, product_to_remove));
    }

    const delete_item_from_cart = (product_to_delete) => {
        set_cart_items(cart_items.filter( (cart_item) => cart_item.id !== product_to_delete.id));
    }

    const value = {is_cart_open, set_cart_open, add_item_to_cart, remove_item_from_cart, cart_items, delete_item_from_cart, cart_cnt, total};
 
    return( <CartContext.Provider value={value}>{children}</CartContext.Provider> )
}