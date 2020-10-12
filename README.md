# jQuery Server-Side Calculator

## Description

    Duration: 2.5 days

    Your project description goes here. What problem did you solve? How did you solve it?

    THe project goal was to build a calculator that took two number inputs and a selected mathematical operator and displayed both the current answer to the equation and a history of equations. All math had to be done on the server side.

    This was done by posting the inputed numbers and selected mathematical operator to the server via an object. The server then took the inputed information from the object and calculated a total based on the inputed numbers and operator from the object. The total was then moved to it's own variable and was sent back to the client. The client then performed a get request for the total and then dsplayed it to the DOM.

    For the history of calculations, the server made a new object that contained the two inputed numbers, the operator, and the total and ent it back to the client. The client then made a get request fro that objct and appended the eleements in the object so that the read out like an equation (num1, operator, num2, = total).

## Prerequisites

    - Node.js
    - express
    - body-parser

## Installation

    To run this application, start the server by typing 'npm start' into the terminal. Then, type in localhost:5000 into the browser.

## Usage

    - Enter a number into the first input field
    - Select a mathematical operator
    - Enter a second number into the second input field
    - Click on the '=' button to calculate and display the answer and history
    - Click on the 'C' button to clear the inputs and operator

## Acknowledgements

    Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.
    Thank you to Shyla and Franz for their helpful input and patience.