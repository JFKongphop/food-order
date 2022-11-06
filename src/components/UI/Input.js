import classes from "./Input.module.css"

// input of amount that use for get the amount 
// use at mealItemForm get data

const Input = (props) =>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input}/>
        </div>
    )
}

export default Input