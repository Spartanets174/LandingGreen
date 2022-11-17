import './btn.scss'
import React from 'react'
const Btn = (props) => {
    const {text='', cls =''} = props;
    return(
        <button className={`Button ${cls}`}>{text}</button>
    )  
}

export default Btn