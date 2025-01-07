import { useState } from "react";
import "./TextBox.css";

export const TextBox = (props) => {
    //console.log("Data: ", props)
    const placeholderDops = `${props.placeholder}...`

    const {type = "text"} = props

    const changeValue = (e) =>{
        props.updateValue(e.target.value)
    }

    return <div className={`text text-${type}`}>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderDops} 
            required={props.required} 
            value={props.value}
            onChange={changeValue}
            type={type}
            />
            
    </div>
}