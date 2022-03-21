import React, {useState} from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';


function App() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
  });

  return (
    <div className="App mx-auto col-6 text-center container mt-2">
      <Form inputs = {state} setInputs={setState}/>
      <Result data = {state} />
    </div>
  );
}

export default App;
