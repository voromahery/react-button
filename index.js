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
                <Button startIcon="start-icon">Default</Button>
                <Button endIcon="end-icon">Default</Button>
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
            </div>
            <div>
                <Button endIcon="end-icon" size="lg" color="secondary">Danger</Button>
            </div>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));

export default App