// root.jsx
import React from 'react'
import config from './config.json'
import './root.css';

const Root = () => (
  <div>
    <div className="beach">Hello React Hot Loader!</div>
    <h2>Adding some more code here</h2>
    <h6>and here</h6>
    <p>{config.text}</p>
  </div>
    )

export default Root;