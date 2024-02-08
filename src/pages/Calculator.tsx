import { useState } from 'react';
import { Button, Container, Col, Stack } from 'react-bootstrap';
import { BackHome } from '../components/BackHome';

interface IButton {
  value: number | string;
}


export default function Calculator () {

  const buttonValue: IButton[] = [
    7 , 8 , 9 , 'C' ,
    4 , 5 , 6 , '+' ,
    1 , 2 , 3 , '-' ,
    0 , '/', '*', '='
  ].map((value) => ({ value }));

  // declare a state variable for the result and initialize it to an empty string
  const [result, setResult] = useState('');

  const handleClick = (value: number | string) => {
    // if the last character of the result and the current value are both operators, replace the last operator with the current one
    if ('+-*/'.includes(value as string) && '+-*/'.includes(result.slice(-1))) {
    setResult(result.slice(0, -1) + value);
    return;
  }

    // handle division by zero
    if (value === '=' && /\/0/.test(result)) {
      setResult('Error: Division by zero');
      return;
    }

    // limit the input length
    if (result.length > 30) {
      return;
    }
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
        setResult('Error');
      }
    // otherwise, append the value to the result
    } else {
      setResult(result + value);
    }
  };

  return (
    <Container fluid
      className='calc_Container text-center vw-100'>
      <div className=' col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mx-auto'>
        {/*Contains result and buttons*/}
        <div className='container-fluid calcDisp border border-warning'>
          {/* This is where result is shown */}
          <h1 className='mt-3'>Calculator</h1>
          <Stack className='
            calc_Result container-fluid
             mx-auto mb-4 border border-warning text-start'>
              {result}
          </Stack>

          {/* This is where buttons are located */}
          <div className='container-fluid
            calc_Buttons mx-auto pt-4'>
              
            {/* Maps buttonValue array */}
            {buttonValue.map((button, index) => (
            // use a column to create a button with a specific width
                  <Col className='calcBtn_col' key={button.value} xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button
                      className={index % 4 === 3 ? 'last' : ''}
                      onClick={() => handleClick(button.value)}
                    >
                      {button.value}
                    </Button>
                  </Col>
                ))}
          </div>
        </div>
          <div className='mt-5'>
          <BackHome/>
          </div>
      </div>
      
    </Container>
  );
};
;
