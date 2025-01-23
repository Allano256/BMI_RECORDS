import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [weight, setNewWeight] = useState("");
  const [height, setNewHeight] = useState("");
  const [bmi, setBmi] = useState(null);


  const handleWeightChange = (e)=> {
    setNewWeight(e.target.value);
    
  }

  const handleHeightChange=(e)=>{
    setNewHeight(e.target.value);
    
  }

  const CalculateBMI = ()=>{
    
      if(!weight || !height){
        alert("Both fields needed...");
        return;
      }
      
        const heightInmeters = height / 100;
        const bmiValue= (weight /(heightInmeters**2)).toFixed(2);
        setBmi(bmiValue);
      
  };

  const ResetScreen =()=>{
    setNewHeight("");
    setNewWeight("");
    setBmi(null)
  }
  
  return (
    <>
   
    
    <section>
     
       <div className={styles.input}>
            <label htmlFor="weight">Enter weight: </label>
            <input type="number" value={weight} onChange={handleWeightChange} placeholder='Enter weight...'  />
            <label htmlFor="height">Enter height in cms: </label>
            <input type="number" value={height} onChange={handleHeightChange} placeholder='Enter height...' />
            <div className={styles.buttons}>
            <button onClick={CalculateBMI} >Submit</button>
            {bmi ? <button onClick={ResetScreen}>Reset</button> : ""}
            </div>
            

            { bmi && <div><h3>Your BMI is: {bmi}</h3></div>}
            
       </div>
      
    </section>

   
    </>
  )
}

export default App
