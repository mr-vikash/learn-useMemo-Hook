
import { useState,useMemo } from 'react';
import './App.css';
import Header from './components/Header';

const  App =()=> {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('');

  const expensiveCalculation = (num)=>{
    for(var i = 0;i<=1000000000;i++){}
    return num;
  }

  const calculation = useMemo(()=>{
    expensiveCalculation(count);
  },[count])

  return (
    <div className="App">
      <Header/>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <h1>Count:{count}</h1>
      <input type='text' name='name' onChange={(e)=>setName(e.target.value)}/>
      <h1>Name:{name}</h1>
    </div>
  );
}

export default App;
