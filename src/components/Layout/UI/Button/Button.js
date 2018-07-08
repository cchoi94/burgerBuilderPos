import React from 'react';

import classes from './Button.css'

const componentName = (props) => (
    <button 
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default componentName;