import React from 'react'
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = props => {
  return (
    <div className={classes['header-button']}>
    <button onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default HeaderCartButton