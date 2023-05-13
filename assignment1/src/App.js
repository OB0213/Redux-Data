import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addData } from './counterSlice';
import { useState } from 'react';

function App() {
  const arraydata=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  const [data,setdata]=useState();

  console.log(arraydata);

  

       
   
  return (
    <div className="App">
     <h3>Enter Your name</h3>
     <input type='text' value={data} onChange={(e)=>setdata(e.target.value)}></input>
     <button onClick={()=>dispatch(addData(data))}>Click</button>
     {
      arraydata.map((values)=>{
        return(
          <div>
<h1>{values}</h1>
            </div>
        )
      })
     }
   
    </div>
  );
}

export default App;
