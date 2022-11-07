import classes from "./Card.module.css"

// use this component to cover of components to use
const Card = (props) =>{
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card