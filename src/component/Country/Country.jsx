import React, { useState } from 'react';
import '../Country/Country.css';

const Country = ({country,levisitedcountries,visitedflagshow}) => {


 

 const [Visit, SetVisit] = useState(false)


 const handleevent = () => {

   

   SetVisit(!Visit);

   levisitedcountries(country);



 }


 

 return (
  <div className={`design  ${Visit && 'handleback'}`}>
     <h6>Country Name : {country.name.common}</h6>
     <img src={country.flags.png} className='flagStyle' alt="" />
     <p>Code : {country.cca3}</p>
     <p>Visited Count : {Visit}</p>

     <button className='visitBtn' onClick={handleevent}>{Visit ? 'Visited' : 'Not Visited'}</button>

     <button onClick={() => visitedflagshow(country.flags.png)}>add visited flag</button>
    
  </div>
 );
};

export default Country;