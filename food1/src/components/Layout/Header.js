import { Fragment } from "react"
import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"


// this componenet set of the header name of store, cart and image
const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
                {/* buton on left of header */}
                {/* click to show and hide of overlay from app.js */}
                <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
    )
}

export default Header