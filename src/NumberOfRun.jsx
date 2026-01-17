import { useState } from "react";
export default function NumberofRun()
{



let buttonStyle = {
  padding: "10px 20px",         
  border: "2px solid red",      
  borderRadius: "5px",          
  backgroundColor: "lightgray"  
};

let indbutton = {

  padding: "5px 5px",         
  border: "1px solid green",      
  borderRadius: "3px",          
  backgroundColor: "green",
  color: "white",
  margin: "4px"



}


  const [Count, setCount] = useState(0);
  const [sixCount, setSixCount] = useState(0);
  const [fourCount, setFourCount] = useState(0);
  const [singleCount, setSingleCount] = useState(0);

const addRun = (run) => {

  if (run === 0) {
    // Reset
    setCount(0);
    setSingleCount(0);
    setFourCount(0);
    setSixCount(0);
    return; 
  }
    setCount(Count + run);

    // কোন run type তা update করা
    if (run === 6) setSixCount(sixCount + 1);
    if (run === 4) setFourCount(fourCount + 1);
    if (run === 1) setSingleCount(singleCount + 1);
  }


 return(

  <>
  <div style={buttonStyle}>
   <h1>this is number of run page</h1>

   <h1>Total Run : {Count} </h1>
   <h3>Total Six : {sixCount}</h3>
   <h6>Total Four : {fourCount}</h6>
   <h6>Total Single : {singleCount}</h6>

   <button style={indbutton} onClick={() => addRun(1)}>Single</button>
   <button style={indbutton} onClick={() => addRun(4)}>Four</button>
   <button style={indbutton} onClick={() => addRun(6)}>Six</button>
   <button style={indbutton} onClick={() => addRun(0)}>Reset</button>
</div>
   </>

 )




}