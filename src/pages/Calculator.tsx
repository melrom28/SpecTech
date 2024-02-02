import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Calculator () {
  interface IButton {
    value: number | string;
  }
  
  const buttonValue: IButton[] = [
    7 , 8 , 9 , 'C' ,
    4 , 5 , 6 , '+' ,
    1 , 2 , 3 , '-' ,
    0 , '/', '*', '='
  ].map((value) => ({ value }));

  // declare a state variable for the result and initialize it to an empty string
  const [result, setResult] = useState('');

  const handleClick = (value: number | string) => {
    // if the value is 'C', clear the result
    if (value === 'C') {
      setResult('');
    // if the value is '=', evaluate the result using the eval function
    } else if (value === '=') {
      try {
        // use a template literal to convert the result to a string
        setResult(`${eval(result)}`);
      } catch (error) {
        // if there is an error, display a message
        setResult('Invalid expression');
      }
    // otherwise, append the value to the result
    } else {
      setResult(result + value);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      {/* use a container to wrap the elements */}
      <Container>
        {/* use a row to create a horizontal group of columns */}
        <Row>
          {/* use a column to display the result */}
          <Col className='calcResult'>{result}</Col>
        </Row>
        {/* use another row to create the button container */}
        <Row className="button-container">
          {/* use a map function to render the buttons */}
          {buttonValue.map((button, index) => (
            // use a column to create a button with a specific width
            <Col key={button.value} xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button
                className={index % 4 === 3 ? 'last' : ''}
                onClick={() => handleClick(button.value)}
              >
                {button.value}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
;
