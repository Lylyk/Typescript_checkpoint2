import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Greeting from './Components/greeting';

//Replace all js extension by tsx
//Install typescript @types/node @types/react @types/react-dom @types/jest
//Define a type for the name variable

const name:string = 'Adhem'

function App() {
  return (
    <div className="App">
      <Greeting name={name} />
      <Counter/> 
    </div>
  );
}

export default App;
