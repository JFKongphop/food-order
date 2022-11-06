import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"


// the button to add amount of each food
const MealItemForm = (props) =>{
    return (
        <form className={classes.form}>
            {/* send the props object to set of element in input */}
           <Input label="Amount" input={{
            id : "amount",
            type : "number",
            min : "1",
            max : "5",
            defaultValue : "1"
           }} /> 
           <button>+ ADD</button>
        </form>
    )
}

export default MealItemForm