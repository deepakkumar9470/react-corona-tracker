import React from 'react';
import axios from 'axios';
// const url='https://covid19.mathdro.id/api';
const url = `https://api.covid19api.com/summary`

export const fetchData = async (country) => {
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/Countries/${country}`;
    }
    try{
 const {data:{ TotalConfirmed,TotalDeaths,TotalRecovered,Date}}= await axios.get(changeableUrl); 
        const modifiedData={TotalConfirmed,TotalDeaths,TotalRecovered,Date};
         return modifiedData;
    }catch(error){
     console.log(error);
    }
    
}


// For Charts
export const fetchTotalConfirmed = async () => {
    try{
      const {data} = await axios.get(`${url}`);
      
      const modifiedData= data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
      }));
      return modifiedData;
      
    }catch(error){

    }
    
}

// For Countries Selection Picker

export const fetchCountries = async () => {
    try{
       const{data:{countries}} = await axios.get(`${url}/countries`);  
    
       return countries.map((country)=>country.name);
      
    }catch(error){
      console.log(error);
    }
   
}

