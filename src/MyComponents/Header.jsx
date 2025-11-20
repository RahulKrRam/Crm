import React from 'react'
export default function Header(props) {
    return (
        <>
            <h2> Hello{props.name}</h2>
            <h2> Age={props.age}</h2>
            {props.children}
        </>
    )
}
