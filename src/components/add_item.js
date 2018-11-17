import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import NavButton from './nav_button';

class AddItem extends Component {
    render(){
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton to="/" text="Back to List" color="purple darken-3"/>
            </div>
        )
    }
}

export default AddItem;
