import React,{useState,useEffect} from 'react'
import ServiceHerosection from '../../components/ServiceHerosection/ServiceHerosection'
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription'
// import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function Service() {
  // const location = useLocation();
  // const entryData = location.state?.entryData || {};

  // console.log("Received Data",entryData);

  const { id } = useParams();
  const [serviceData, setserviceData] = useState({});

  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("ServicesData").doc(id);

    const fetchData = async () => {
      try {
        const doc = await contentDataRef.get();
        if (doc.exists) {
          const newData = {
            id: doc.id,
            ...doc.data()
          };
          console.log(newData);
          setserviceData(newData);
        } else {
          console.log("Document does not exist.");
          setserviceData(null);
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
        // Handle error, set state to null or display error message
      }
    };

    fetchData(); // Call fetchData function once component mounts

    return () => {
      // Cleanup function
    };
  }, [setserviceData,id]);


  return (
    <div>
      <ServiceHerosection item={serviceData}/>
      <ServiceDescription item={serviceData}/>
    </div>
  )
}
