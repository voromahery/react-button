import React from 'react'
import './style.css';

function Button(props) {
    let style = "";
    if (props.className && props.color) {
        style = `${props.className} ${props.color}`;
    }
    if (props.color) {
        style = props.color;
    }

    if (props.variant) {
        style = props.variant;
    }

    if (props.size) {
        style = props.size;
    }

    if (props.endIcon) {
        style = props.endIcon;
    }

    if (props.startIcon) {
        style = props.startIcon;
    }

    if (props.endIcon && props.startIcon) {
        style = `${props.endIcon} ${props.startIcon}`;
    }

    if (props.color && props.size) {
        style = `${props.color} ${props.size}`;
    }

    if (props.color && props.variant) {
        style = `${props.color} ${props.variant}`;
    }

    if (props.variant && props.size) {
        style = `${props.variant} ${props.size}`;
    }

    if (props.variant && props.size && props.color) {
        style = `${props.color} ${props.variant} ${props.size}`;
    }

    if (props.endIcon && props.color) {
        style = `${props.endIcon} ${props.color}`;
    }
    
    if (props.startIcon && props.color) {
        style = `${props.startIcon} ${props.color}`;
    }

    if (props.startIcon && props.variant) {
        style = `${props.startIcon} ${props.color} ${props.variant}`;
    }

    if (props.endIcon && props.variant) {
        style = `${props.endIcon} ${props.color} ${props.variant}`;
    }

    if (props.endIcon && props.size) {
        style = `${props.endIcon} ${props.size}`;
    }

    if (props.startIcon && props.size) {
        style = `${props.startIcon} ${props.size}`;
    }

    if (props.size && props.color && props.endIcon) {
        style = `${props.color} ${props.size} ${props.endIcon}`;
    }

    if (props.size && props.color && props.startIcon) {
        style = `${props.color} ${props.size} ${props.startIcon}`;
    }

    if (props.variant && props.color && props.endIcon) {
        style = `${props.color} ${props.variant} ${props.endIcon}`;
    }

    if (props.variant && props.size && props.endIcon) {
        style = `${props.variant} ${props.size} ${props.endIcon}`;
    }

    if (props.variant && props.size && props.startIcon) {
        style = `${props.variant} ${props.size} ${props.startIcon}`;
    }

    if (props.variant && props.size && props.color && props.endIcon) {
        style = `${props.color} ${props.variant} ${props.size} ${props.endIcon}`;
    }

    if (props.variant && props.size && props.color && props.startIcon) {
        style = `${props.color} ${props.variant} ${props.size} ${props.startIcon}`;
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