import React from 'react';
import ReactDom from 'react-dom';
import Button from './Buttons.js';
import './style.css';
import icon from './icon/shopping-cart.svg';

function App() {
    return (
        <div className="grid">
            <Button>Default</Button>
            <div className="outline-button">
                <Button variant="outline">Default</Button>
                <Button variant="outline-text">Default</Button>
            </div>
            <div>
                <Button variant="disableShadow">Default</Button>
            </div>
            <div className="disable">
                <Button variant="disable-button">Disabled</Button>
                <Button variant="disable-text">Disabled</Button>
            </div>
            <div className="icon">
                <Button variant="start-icon"><img src={icon} alt="shopping-cart" /> Default</Button>
                <Button variant="end-icon">Default <img src={icon} alt="shopping-cart" /></Button>
            </div>
            <div className="size">
                <Button size="sm">Default</Button>
                <Button size="md">Default</Button>
                <Button size="lg">Default</Button>
            </div>
            <div className="color">
                <Button color="default">Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Secondary</Button>
                <Button size="lg" color="danger">Danger</Button>
            </div>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));

export default App