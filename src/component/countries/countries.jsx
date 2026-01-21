import { use, useState } from "react";
import Country from '../Country/Country'
import '../countries/Countries.css'


export default function Countries({listofcountries})
{

  const countries = use(listofcountries);

  const [handlevisitedcountries , SetHandlevisitedcountries] = useState([]);

  const [visitedflag , Setvisitedflag] = useState([]);


  const levisitedcountries = (country) => {
    const newcountry = [...handlevisitedcountries,country];

    SetHandlevisitedcountries(newcountry)
  }

  const visitedflagshow = (flag) => {

    const newflag = [...visitedflag , flag]

    Setvisitedflag(newflag);



  }

  return (

   <div >
     <h4>Total Countries : {countries.length}</h4>

      <h4>Total Visited Countries : {handlevisitedcountries.length}</h4>

      <div >
        {

          visitedflag.map(item => <img src={item}></img>)

        }
      </div>

      <ol>
        {
          handlevisitedcountries.map(item => <li>{item.name.common}</li>)

        }
      </ol>

     <div className="countries">
        {

        countries.map(country => <Country 
         key={country.cca3}
         levisitedcountries={levisitedcountries}
         visitedflagshow = {visitedflagshow}
         country={country}></Country>)

       }
     </div>

     

   </div>

   

    


  )




}