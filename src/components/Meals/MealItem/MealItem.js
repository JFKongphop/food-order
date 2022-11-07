import { useContext } from "react"
import CartContext from "../../../store/cart-context"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

// cover of list component for amount and button

const MealItem = (props) =>{

    // share the item amount after add to component 
    const cartCtx = useContext(CartContext);

    // set pirce tow digit
    const price = `${props.price.toFixed(2)}`

    // use the function to add mealitemform
    const addItemToCartHandler = (amount) =>{
        cartCtx.addItem({
            id : props.id,
            name : props.name,
            amount : amount,
            price : props.price
        })
    }

    
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addItemToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem