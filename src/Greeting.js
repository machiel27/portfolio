import React from 'react';

function Greeting(props) {
  return <h1 className="text-3xl font-bold underline">Hello, {props.name}!</h1>;
}

export default Greeting;
