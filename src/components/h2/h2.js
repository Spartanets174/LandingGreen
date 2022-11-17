import './h2.scss'
import React from 'react'
const H2 = (props) => {
    const {text='', cls =''} = props;
    return(
        <h2 className={`text ${cls}`}>{text}</h2>
    )  
}

export default H2