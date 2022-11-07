import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
 


// this component is cart on left of header
const HeaderCartButton = (props) =>{

    // popup of button cart
    const [btnHighlighted, setBtnHighlighted] = useState(false)

    // set the context item for share to components
    const cartCtx = useContext(CartContext);

    // show the all amount of food
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    console.log(numberOfCartItems);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

    const { items } = cartCtx

    useEffect(()=>{
        if(items.length ){
            return;
        }
        setBtnHighlighted(true)

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)

        return () =>  {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      );
    };

export default HeaderCartButton