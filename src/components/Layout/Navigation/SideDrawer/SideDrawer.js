import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigaationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Aux';

const sideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="8%" mb="32px"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;