import React, { Component } from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from'../Button/Button';


class Keypad extends Component {
    render () {
        return (
            <div className='Keypad'>
            {/* row 1 */}
            <KeypadRow>
                <Button type= 'primary'>C</Button>
                <Button>&larr;</Button>
                <Button type= 'operator'>%</Button>
                <Button type= 'operator'>/</Button>
                
                </KeypadRow>

            {/* row 2 */}
            <KeypadRow>
                <Button type= 'primary'>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button type= 'operator'>*</Button>

            </KeypadRow>

            {/* row 3 */}
            <KeypadRow>
                <Button type= 'primary'>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button type= 'operator'>-</Button>

            </KeypadRow>

            {/* row 4 */}
            <KeypadRow>
                <Button type= 'primary'>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button type='operator'>+</Button>

            </KeypadRow>

            {/* row 5 */}
            <KeypadRow>
                <Button type= 'primary'>0</Button>
                <Button>.</Button>
                <Button type= 'large'>=</Button>

            </KeypadRow>

            </div>
            
        );
    }
}

export default Keypad;