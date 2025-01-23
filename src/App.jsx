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
        <h1>Welcome to BMI Calculator...please enter your height and weight to get started.</h1>
       <p><b>Body Mass Index</b> is a simple and widely used measure to assess a person's body weight relative to their height. It helps determine whether an individual is <b>underweight,</b>  <b>healthy</b> , <b>overweight</b>  or <b>obese.</b> 
       Using our <b>BMI Calculator tool</b>, you will be able to monitor your health status,keep track of your BMI, promote awareness and healthier lifestyle choices.</p> 

            <label htmlFor="weight">Enter weight: </label>
            <input type="number" value={weight} onChange={handleWeightChange} placeholder='Enter weight...'  />
            <label htmlFor="height">Enter height in cms: </label>
            <input type="number" value={height} onChange={handleHeightChange} placeholder='Enter height...' />
            <div className={styles.buttons}>
            <button onClick={CalculateBMI} >Submit</button>
            {bmi ? <button onClick={ResetScreen}>Reset</button> : ""}
            </div>
            

            { bmi && <div>
              <h2>Your BMI is: {bmi}kg/m&sup2;</h2>
            

            </div>}
            
       </div>
    </section>

    <section>
      <div className="classes">
        <table>
          <thead>
            <tr>
            <th>BMI(kg/m&sup2)</th>
            <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>below 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Normal weight</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 - 34.9</td>
              <td>Obesity Class I</td>
            </tr>

            <tr>
              <td>35.0 - 39.9</td>
              <td>Obesity Class II</td>
            </tr>

            <tr>
              <td>40.0 and above</td>
              <td>Obesity Class III (Severe)</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer>
      <p>&copy; {new Date().getFullYear()} AllanoTech. All Rights Reserved. <br /> Tel: +18186921469 <br />Email: allanzizinga@yahoo.com
        
      </p>
    </footer>
    </>
  )
}

export default App
