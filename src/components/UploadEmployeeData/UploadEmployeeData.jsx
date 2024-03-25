import React,{useState} from 'react'
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export default function UploadEmployeeData({ setLoadingState,setLoadingMessage }) {
 
  const [employeename, setemployeename] = useState('');
  const [guardianname, setguardianname] = useState('');
  const [employeeid,setemployeeid] = useState(""); 
  const [employeepan, setemployeepan] = useState("");
  const [employeeaadhar, setemployeeaadhar] = useState("");
  const [employeeaddress, setemployeeaddress] = useState("");
  const [employeegender, setemployeegender] = useState("");
  const [employeedob, setemployeedob] = useState('');
  const [employeemaritialstatus, setemployeemaritialstatus] = useState("");
  const [employeedatofjoining, setemployeedatofjoining] = useState("");
  const [eiscpc, seteiscpc] = useState("");
  const [nomineename, setnomineename] = useState("");
  const [nomineeaddress, setnomineeaddress] = useState("");
  const [nomineemobilenumber, setnomineemobilenumber] = useState("");
  const [nomineerelation, setnomineerelation] = useState("");
  const [employeemobilenumber, setemployeemobilenumber] = useState("");
  const [employeeemail, setemployeeemail] = useState("");
  const [employeebank, setemployeebank] = useState("");
  const [employeeaccountnumber, setemployeeaccountnumber] = useState("");
  const [employeebranchname, setemployeebranchname] = useState("");
  const [employeeifsccode, setemployeeifsccode] = useState("");

  const [numoffamilymembers, setnumoffamilymembers] = useState(0);
  const [familyMembers, setFamilyMembers] = useState(Array.from({ length: parseInt(numoffamilymembers) }, () => ({ dateOfBirth: '', relation: '' })));

  const handleNumOfFamilyMembersChange = (e) => {
    setnumoffamilymembers(parseInt(e.target.value));
    setFamilyMembers(Array.from({ length: parseInt(e.target.value) }, () => ({ dateOfBirth: '', relation: '' })));
  };

  const handleTextChange = (index, fieldName, value) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index][fieldName] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleUploadopeningpositions = async (e) => {
    e.preventDefault();
    try {
        setLoadingState(true);
        setLoadingMessage("Please wait until your data is submitted!...");

        const firestore = firebase1.firestore();

        const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
        const submissionData = {
            employeename: employeename,
            guardianname:guardianname,
            employeeid:employeeid,
            employeepan:employeepan,
            employeeaadhar:employeeaadhar,
            employeeaddress:employeeaddress,
            employeegender:employeegender,
            employeedob:employeedob,
            employeemaritialstatus:employeemaritialstatus,
            employeedatofjoining:employeedatofjoining,
            eiscpc:eiscpc,
            nomineename:nomineename,
            nomineeaddress:nomineeaddress,
            nomineemobilenumber:nomineemobilenumber,
            nomineerelation:nomineerelation,
            employeemobilenumber:employeemobilenumber,
            employeeemail:employeeemail,
            employeebank:employeebank,
            employeeaccountnumber:employeeaccountnumber,
            employeebranchname:employeebranchname,
            employeeifsccode:employeeifsccode,
            familyMembers: familyMembers,
            submittedAt: timestamp,
        };

        await firestore.collection("EmployeeData").add(submissionData);

        setLoadingMessage("success", "Data submitted successfully!");
        setTimeout(() => {
            setLoadingState(false);
        }, 5000);
        setemployeename("");
        setguardianname("");
        setemployeeid("");
        setemployeepan("");
        setemployeeaadhar("");
        setemployeeaddress("");
        setemployeegender("");
        setemployeedob("");
        setemployeemaritialstatus("");
        setemployeedatofjoining("");
        seteiscpc("");
        setnomineename("");
        setnomineeaddress("");
        setnomineemobilenumber("");
        setnomineerelation("");
        setemployeemobilenumber("");
        setemployeeemail("");
        setemployeebank("");
        setemployeeaccountnumber("");
        setemployeebranchname("");
        setemployeeifsccode("");
        setFamilyMembers([]);

    } catch (error) {
        setLoadingMessage("error", 'Failed to submit data. Please try again.');
        setTimeout(() => {
            setLoadingState(false);
            console.log(error);
        }, 5000);
    }
};

    

  return (
    <div className="uploadimagerow">

    <div className="uploadimagecolumn">
      <div className="uploadimagecolumninnerdiv">
        <h3 className="mb-8 text-center font-bold text-2xl">Employee Information</h3>

        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Employee Name</label>
             <input type="text" required placeholder='Enter Employee Name.'  value={employeename} onChange={(e) => setemployeename(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Father/Husband Name</label>
             <input type="text" required placeholder='Enter Father/Husband Name.'  value={guardianname} onChange={(e) => setguardianname(e.target.value)}/>
            </div>
        </div>

        <div className="uploadimageinputdiv" style={{width:"100%"}}>
             <label htmlFor="">Employee ID</label>
             <input type="text" required placeholder='Enter Employee ID'  value={employeeid} onChange={(e) => setemployeeid(e.target.value)}/>
        </div>
       
        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">PAN Number</label>
             <input type="text" required placeholder='Enter PAN Number'  value={employeepan} onChange={(e) => setemployeepan(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Aadhar Number</label>
             <input type="text" required placeholder='Enter Aadhar Number'  value={employeeaadhar} onChange={(e) => setemployeeaadhar(e.target.value)}/>
            </div>
        </div>
        
        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Full Address</label>
             <input type="text" required placeholder='Enter Full Address'  value={employeeaddress} onChange={(e) => setemployeeaddress(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Gender</label>
             <select name="" id="" onChange={(e) => setemployeegender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             </select>
            </div>
        </div>
        
        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Date of Birth</label>
             <input type="date" required placeholder='Enter Date of Birth'  value={employeedob} onChange={(e) => setemployeedob(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Maritial Status</label>
             <select name="" id="" onChange={(e) => setemployeemaritialstatus(e.target.value)}>
              <option value="">Select Maritial Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
             </select>
            </div>
        </div>
       
        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Date of Joining</label>
             <input type="date" required placeholder='Enter Date of Joining'  value={employeedatofjoining} onChange={(e) => setemployeedatofjoining(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Have any ESIC/PF Number</label>
             <select name="" id="" onChange={(e) => seteiscpc(e.target.value)}>
              <option value="">Select Options</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
             </select>
            </div>
        </div>

        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Name of Nominee</label>
             <input type="text" required placeholder='Enter Name of Nominee'  value={nomineename} onChange={(e) => setnomineename(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Address of Nominee</label>
             <input type="text" required placeholder='Enter Address of Nominee'  value={nomineeaddress} onChange={(e) => setnomineeaddress(e.target.value)}/>
            </div>
          </div>

          <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Mobile NO. Of Nominee</label>
             <input type="text" required placeholder='Enter Mobile NO. Of Nominee'  value={nomineemobilenumber} onChange={(e) => setnomineemobilenumber(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Relation with Employee</label>
             <input type="text" required placeholder='Enter Relation with Employee'  value={nomineerelation} onChange={(e) => setnomineerelation(e.target.value)}/>
            </div>
          </div>
        
        <div className="uploadimageinputdiv" style={{width:"100%"}}>
             <label htmlFor="">Number of Family Members</label>
             <input type="number" required placeholder='Enter Number of Family Members'  value={numoffamilymembers} onChange={handleNumOfFamilyMembersChange}/>
        </div>

        {familyMembers.map((member, index) => (
        <div key={index} className='mappedimagesdiv'>
          <input
            type="date"
            required
            value={member.dateOfBirth}
            onChange={(e) => handleTextChange(index, 'dateOfBirth', e.target.value)}
            placeholder="Date of Birth"
          />
          <input
            type="text"
            required
            value={member.relation}
            onChange={(e) => handleTextChange(index, 'relation', e.target.value)}
            placeholder="Relation with Employee"
          />
        </div>
         ))}

          <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Mobile Number</label>
             <input type="text" required placeholder='Enter Mobile Number'  value={employeemobilenumber} onChange={(e) => setemployeemobilenumber(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Email Id </label>
             <input type="email" required placeholder='Enter Email ID'  value={employeeemail} onChange={(e) => setemployeeemail(e.target.value)}/>
            </div>
          </div>

          <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Bank Name</label>
             <input type="text" required placeholder='Enter Bank Name'  value={employeebank} onChange={(e) => setemployeebank(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Account Number</label>
             <input type="text" required placeholder='Enter Account Number'  value={employeeaccountnumber} onChange={(e) => setemployeeaccountnumber(e.target.value)}/>
            </div>
          </div>

          <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">IFSC Code</label>
             <input type="text" required placeholder='Enter IFSC Code'  value={employeeifsccode} onChange={(e) => setemployeeifsccode(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Branch Name</label>
             <input type="text" required placeholder='Enter Branch Name'  value={employeebranchname} onChange={(e) => setemployeebranchname(e.target.value)}/>
            </div>
          </div>

        <button className="uploadimagebtn" onClick={handleUploadopeningpositions} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
      </div>
    </div>

    <div className="uploadimagecolumn">
      <img className="uploadimageimage" src="/" alt="openingpositionimage"></img>
    </div>

  </div>
  )
}
