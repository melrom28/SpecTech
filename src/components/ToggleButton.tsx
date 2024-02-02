import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);


  function toggleMode(){
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? 'white' : '#36393F';
  };

  return (
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Toggle dark mode"
          onChange={toggleMode}
        />
      </Form>
  );
}
