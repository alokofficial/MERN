import React from "react";
export default function Button(props){
    return (
        <button type="button" className={props.className} onClick={props.handler}>
                {props.children}
        </button>
       
    )
}