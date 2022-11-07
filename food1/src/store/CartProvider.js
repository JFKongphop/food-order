import { useReducer } from "react"
import CartContext from "./cart-context"


const defaultCartState = {
    items : [],
    totalAmount : 0
}

// useReducer
// state is data to management
// action is function to management

// this function show on left is cart
const cartReducer = (state, action) => {
    // add item and concat to array item
    if(action.type === "ADD"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // use this to get of item to add more each item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems

        // update of item when click on order left
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                // with amount
                amount : existingCartItem.amount + action.item.amount
            }
            // set new array when click to add more
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }

        //  update item 
        else {
            updatedItems = state.items.concat(action.item);
        }

        // after it that return back to new value
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        };
    }

    // remove item and concat to array item
    if (action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );


        const existingItem = state.items[existingCartItemIndex];
        // with amount
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        

        // chcek the items
        if (existingItem.amountb === 1){
            updatedItems = state.items.filter(
                (item)=> item.id !== action.id
            );
        }

        // return the normal not change of value
        else{
            const updatedItem = { ...existingItem, amount : existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }


    return defaultCartState
}

const CartProvider = (props) =>{

    // state and action
    // after finish the action that set value in defaultCartState to use new value and return again
   const [cartState, dispatchCartAcion] = useReducer(cartReducer, defaultCartState);

    // add item by this function
    const addItemToCartHandler = (item) =>{
        // set the action to add item
        dispatchCartAcion({ type : 'ADD', item : item });
    }

    // remove item by this function
    const removeItemFromCartHandler = (id) =>{
        dispatchCartAcion({ type : 'REMOVE', id : id });

    }
 
    // update of item
    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    };

    return (
        // share the amount of item in this components
        // set this component to send data and cart-context to set object
        // this component to share for all by context
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider