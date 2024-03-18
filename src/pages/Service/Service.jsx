import React from 'react'
import ServiceHerosection from '../../components/ServiceHerosection/ServiceHerosection'
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription'
import { useLocation } from "react-router-dom";

export default function Service() {
  const location = useLocation();
  const entryData = location.state?.entryData || {};

  console.log("Received Data",entryData);

  return (
    <div>
      <ServiceHerosection item={entryData}/>
      <ServiceDescription item={entryData}/>
    </div>
  )
}
