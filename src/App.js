import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import  { useState } from "react";
import image1 from'./image1.gif';

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert1 from './componets/alerts';



function App() {
  const [Height ,setHeight]=useState(0)  
  const [Weight ,setWeight]=useState(0)  
  const [val ,setval]=useState(0) 
  const [human ,sethuman]=useState("human :) ")  

  const handle =(e)=>{
    const h =(Weight/Height**2)
    setval((h*10000).toFixed(2))
    console.log((h*10000).toFixed(2))
    if (val<=20){
      sethuman("Underweight")
      console.log(human)
    }
    else if (val>=20 && val<=24.9){
      sethuman("Normal")
      console.log(human)
    }
    else if(val>=25 && val<=29.9){
      sethuman("over weight")
      console.log(human)
  
  
    }
    else{
      sethuman("obseity")
    }
   
    
  }
  const handle1=(event)=>{
    setHeight(event.target.value);
    console.log(Height)

  }
  const handle12=(event)=>{
    setWeight(event.target.value);
    console.log(Weight)

  }

  return (
    <div className="App" style={{ backgroundImage: `url(${image1})` }}>
      <div className='Cards Card1 ' >
        <h2>BMI Calculator</h2>
        <div className='div1'>
        <input placeholder='Enter the Height ' className='Input' onChange={handle1}></input>
        <input placeholder='Enter the Weight ' className='Input1' onChange={handle12}></input>
        <Button variant="primary" className='but' onClick={handle}>Submit</Button>
        <div className='div2'> 
        <h3> Your BMI Value is {val}</h3>

        
        </div>
        </div>
      </div>
      <Alert1 val2 ={human}/>
      

    </div>
  );
}

export default App;
