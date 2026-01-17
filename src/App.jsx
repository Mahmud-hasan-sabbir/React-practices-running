
import './App.css'

import './Member';
import MemberName from './Member';
import  EventDill  from './Event';
import Count from './Count';
import FetchData from './FetchData';
import { Suspense } from 'react';

function App() {

  let Member = ['sabbir','akhi','minhaj','pakhi','alam','motiur','azizul']
   let deceratedStyle = {
    color: 'red',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '8px',
  }

  return (
    <>
      <h1>My React App</h1>

        <Suspense fallback={<p>Loading............</p>}>
           <FetchData></FetchData>
        </Suspense>

       

        <Count></Count>

        <EventDill style={deceratedStyle}></EventDill>

       <MemberName names={Member} con="1" />


      <Profile />
      <Profileupdateone name="Sabbir" desig="Software Engineer" />
      <Calculation sum={500} />
     
    </>
  )
}


function Profile() {

  let deceratedStyle = {
    color: 'red',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '8px',
  }




  return (
    <>
      <div style={deceratedStyle}>
      <h2>May Name Is Sabbir</h2>
      <p>This is the profile section.</p>
      </div>
      
    </>
  )
}


function Profileupdateone({name, desig}) {
  return (
    <>
      <h2>Name: {name} Designation: {desig}</h2>
      <p>Company : ABC Corp</p>
    </>
  )
}


function Calculation (props){
  return (
    <>
      <h2 style={{ color: 'blue' }}>{`calculation hobe ${props.sum+300}`}</h2>
    </>
  )
}

export default App
