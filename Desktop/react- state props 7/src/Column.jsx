import React from 'react'


const Column=(props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default Column;