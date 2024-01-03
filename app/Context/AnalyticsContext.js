'use client'

import React, { createContext, useContext, useState,} from 'react';
import axios from 'axios';

const AnalyticsContext = createContext();

const AnalyticsProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);
  const [pageVisits, setPageVisits] = useState(0);
  const[satVisits,setSatVisits]=useState(0);
  const [gmatVisits,setGmatVisits]=useState(0)
  const [ieltsVisits,setIeltsVisits]=useState(0)
  

  
//update SAT clicks
const updateSAT=()=>{
  setSatVisits((prevSatVisits)=>prevSatVisits+1)
  setClickCount((prevClickCount)=>prevClickCount+1)
checkForUpdates();


}
//Update GMAT VISITS
const updateGMAT=()=>{
  setGmatVisits((prevGmatVisits)=>prevGmatVisits+1)
  setClickCount((prevClickCount)=>prevClickCount+1)

  checkForUpdates();
}
//Update TOEFL
const updateTOEFL=()=>{
  setIeltsVisits((prevIelts)=>prevIelts+1)
  setClickCount((prevClickCount)=>prevClickCount+1)
  checkForUpdates();
}

//update MAIN PAGE
const updatePage=()=>{
  setPageVisits((prevPageVisits)=>prevPageVisits+1)
  alert('you are on the home page');
  checkForUpdates();
}

//update scheduler
const checkForUpdates=async()=>{
  if(clickCount % 5===0){
//call db and update values

  const body=[satVisits,gmatVisits,ieltsVisits,pageVisits,clickCount]
  try {
    const response=await axios.post('/api/analytics',body);
      if(response.ok){
        return null;
      }
    }
    
   catch (error) {
    console.log('this is an analytics update error:'+ error)
  }
  }
}

  return (
    <AnalyticsContext.Provider value={{ updateGMAT,updatePage,updateTOEFL,updateSAT,satVisits,gmatVisits,ieltsVisits,clickCount, pageVisits, }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useClickContext must be used within a ClickProvider');
  }
  return context;
};

export { AnalyticsProvider, useAnalyticsContext };
