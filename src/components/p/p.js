import './p.scss'
import React from 'react'
const P = (props) => {
    const {text='', cls =''} = props;
    return(
        <p className={`text ${cls}`}>{text}</p>
    )  
}

export default P