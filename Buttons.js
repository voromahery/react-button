import React from 'react'
import './style.css';

function Button(props) {
    return (
        <div>
            <div>
                <p></p>
                <button className={props.className}>Default</button>
            </div>
        </div>

    )
}

export default Button