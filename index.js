import React from 'react';
import ReactDom from 'react-dom';
import Button from './Buttons.js';
import './style.css';
import icon from './icon/shopping-cart.svg';

function App() {
    return (
        <div className="grid">
            &lt;Button /&gt;
            <Button>Default</Button>
            <div className="outline-button">
                <div>
                    &lt;Button variant="outline" /&gt;
                <Button variant="outline">Default</Button>
                </div>
                <div>
                    &lt;Button variant="text" /&gt;
                <Button variant="outline-text">Default</Button>
                </div>
            </div>
            <div>
                &lt;Button disableShadow
                /&gt;
                <Button variant="disableShadow">Default</Button>
            </div>
            <div className="disable">
                <div>
                    &lt;Button disabled /&gt;
                <Button variant="disable-button">Disabled</Button>
                </div>
                <div>
                    &lt;Button variant="text" disabled/&gt;
                <Button variant="disable-text">Disabled</Button>
                </div>
            </div>
            <div className="icon">
                <div>
                    &lt;Button startIcon="local_grocery_store" /&gt;
                <Button startIcon="start-icon">Default</Button>
                </div>
                <div>
                    &lt;Button endIcon="local_grocery_store" /&gt;
                <Button endIcon="end-icon">Default</Button>
                </div>
            </div>
            <div className="size">
                <div>
                    &lt;Button size="sm" /&gt;
                <Button size="sm">Default</Button>
                </div>
                <div>
                    &lt;Button size="md" /&gt;
                <Button size="md">Default</Button>
                </div>
                <div>
                    &lt;Button size="lg" /&gt;
                <Button size="lg">Default</Button>
                </div>
            </div>
            <div className="color">
                <div>
                    &lt;Button color="default" /&gt;
                <Button color="default">Default</Button>
                </div>
                <div>
                    &lt;Button color="primary" /&gt;
                <Button color="primary">Primary</Button>
                </div>
                <div>
                    &lt;Button color="secondary" /&gt;
                <Button color="secondary">Secondary</Button>
                </div>
                <div>
                    &lt;Button color="danger" /&gt;
                <Button color="danger">Secondary</Button>
                </div>
            </div>
            <div>
                <Button endIcon="end-icon" size="lg" color="secondary">Default</Button>
            </div>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));

export default App