import React from 'react'
import './style.css';

function Button(props) {
    let style = ""; 
if (props.color) {
    style = props.color;
} else if (props.variant) {
    style = props.variant;
} else if (props.size) {
    style = props.size;
} else if (props.color && props.size && props.variant) {
    style = props.color;
}
    return (
        <div>
            <div>
                <button className={style}>{props.children}</button>
            </div>
        </div>

    )
}

export default Button