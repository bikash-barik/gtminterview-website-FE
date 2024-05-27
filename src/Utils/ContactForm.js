import axios from "axios";
import {API} from '../Utils/StaticData'

const ContactForm = async (formData)=>{
    
    try{
        await axios.post(`${API}/ContactUsForm`, formData);

        return {type :"success",text :"Form Submitted Successfully",loading: false}
      
    }

    catch(error){
        return {type :"error",text : error.message ,loading: false}
    } 
}

export default ContactForm;