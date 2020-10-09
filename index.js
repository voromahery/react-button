import React from 'react';
import ReactDom from 'react-dom';
import Button from './Buttons.js';
import './style.css';



function App() {
    return (
        <div>
            <Button />
            <Button className="outline" />
            <Button className="outline-text" />
            <Button className="disableShadow" />
            <div className="disable">
                <Button className="disable-button" />
                <Button className="disable-text" />
            </div>
            <div className="icon">
                <Button className="start-icon" />
                <Button className="end-icon" />
            </div>
            <div className="size">
                <Button className="sm" />
                <Button className="md" />
                <Button className="lg" />
            </div>
            <div className="color">
                <Button className="default" />
                <Button className="primary" />
                <Button className="secondary" />
                <Button className="danger" />
            </div>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));

export default App