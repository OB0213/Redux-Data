import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addData,addNumber } from './counterSlice';
import { useState } from 'react';

function App() {
  const {value,counter}=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const [data,setdata]=useState();


 console.log(value);
 console.log(counter);
  

       
   
  return (
    <div className="App">
     <h3>Enter Your name</h3>
     <input type='text' value={data} onChange={(e)=>setdata(e.target.value)}></input><br></br>
     <button onClick={()=>dispatch(addData(data))}>Click</button><br></br>
     <button onClick={()=>dispatch(addNumber())}>+</button>
     {
      value.map((values)=>{
        return(
          <div>
<h1>{values}</h1>
            </div>
        )
      })
     }
     
     <h1>{counter}</h1>
   
    </div>
  );
}

export default App;
