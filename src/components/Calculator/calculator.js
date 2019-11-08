import React, { Component } from 'react';
import './calculator.css';
import Screen from '../Screen/screen.js';
import Keypad from '../Keypad/Keypad';


/*Main calculator component. Contains our other calculator components. */
class Calculator extends Component {

    /*Constructor function to set our initial state */ 
    constructor(props) {
        super(props);
        
        this.state = {
            equation: '2*5',
            result: 10
        }
    }

    onButtonPress = (event) => {
       let equation =
        this.state.equation;
        
        const pressedButtonValue = 
        event.target.innerHTML;
        
        console.log(pressedButtonValue);

        if (pressedButtonValue === 'C') {
            this.clear();
            return;
        } else if ((pressedButtonValue >= '0' && pressedButtonValue <= '9') ||pressedButtonValue === '.') {
            /* If the user has pressed a button with a value btwn 0 and 9 or the period ,  add that value to the equation */
            equation +=  pressedButtonValue;
        } else if (['+', '-','*','/','%'].indexOf(pressedButtonValue) !== -1) {
           
            
            /* If the user has pressed a button with the value of an operator, add the operator to the equation with a space on either side */
           
            equation += ' ' + pressedButtonValue + ' ';
        } else if (pressedButtonValue === '=') {
            /* IF the user hits the enter button, calculate stuff */
            /*Try catch blocks - try to run the code in the try block. If it fails and throws an error, deal with it in the catch block */
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                this.setState({ result });

            } catch (error) {
                /* If an error occurs, print it to the console and alert the user */
                console.log(error);
                alert('An error occured. Check to make sure your equation is correct');

            }

        } else {
            /* If the user has pressed the back arrow, remove the last character from the equation string */
            equation = equation.trim();
            equation= equation.substr(0, equation.length -1);
        }


        /* update our state with the new verison of the equation */

        this.setState({ equation });

    }

    clear() {
        this.setState({equation: '', result:0});
    }
    
    render() {
        return (
            <div className="Calculator">
            <Screen equation={this.state.equation} result={this.state.result}/>
            <Keypad onButtonPress={this.onButtonPress} />
            </div>
           
        );
    }
}
export default Calculator;