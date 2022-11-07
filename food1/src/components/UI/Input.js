import classes from "./Input.module.css"
import React from "react"

// input of amount that use for get the amount 
// use at mealItemForm get data

// get the data from meal item to send the amount
const Input = React.forwardRef((props, ref) =>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
})

export default Input