import React from "react";


// share the context to add and remove the amount of orders
// this component to set data onject to share with cartprovider
const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}
})

export default CartContext;