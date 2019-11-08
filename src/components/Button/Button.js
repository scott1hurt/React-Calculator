import React, { Component } from 'react';
import './Button.css';




class Button extends Component {
    static defaultProps = {
        type: ''

    };

render() {
    let classes = 'Button ';

    for (let i = 0; i < this.props.type.length; i++) {
        classes += 'Button-' + this.props.type[i];
        if (i < this.props.type.length - 1) {
            classes += ' ';
        }
    }
      return (
            <button className={classes} onClick={this.props.onButtonPress}>
                
                    {this.props.children}
            </button>
        

        );
    }
}
export default Button;