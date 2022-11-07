import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) =>{
    return (
        <div className={classes.backdrop} onClick={props.onClose}>

        </div>
    )
}

const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

// show the overlay with cartjs
const Modal = (props) =>{
    return (
        <Fragment>
            {/* get to close backdrop */}
            {/* when click out of backdrop that is close */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, 
                portalElement
            )}
        </Fragment>
    )
}

export default Modal;