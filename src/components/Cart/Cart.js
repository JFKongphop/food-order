import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';



const Cart = (props) =>{
    // get the data of all food
    const cartCtx = useContext(CartContext);

    // total amount
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    // show the order
    const hasItems = cartCtx.items.length > 0;

    // remove item by function in context
    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    // add item by function in context
   const cartItemAddHandler = (items) =>{
        cartCtx.addItem({...items, amount : 1})
   }
    


    // show the name of food when get from context
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {/* receive the state to close of overlay */}
                <button 
                    className={classes['button--alt']} 
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart

