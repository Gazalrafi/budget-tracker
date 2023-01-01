import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Model.module.css'

const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop}>{props.children}</div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Model = (props) => {
  return (
    <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default Model
