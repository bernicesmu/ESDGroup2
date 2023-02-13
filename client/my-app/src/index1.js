import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';


function UpdateDetailsForm() { 
    const [smuEmailNoFac, setSmuEmailNoFac] = useState('bernice.teo.2021@smu.edu.sg');
    const [smuEmailWithFac, setSmuEmailWithFac] = useState('bernice.teo.2021@scis.smu.edu.sg');
    const [matricNum, setMatricNum] = useState('01412345');
    const [matricName, setMatricName] = useState('Bernice TEO Wei Shan');
    const [firstName, setFirstName] = useState('Bernice'); 
    const [lastName, setLastName] = useState('Teo'); 
    const [gender, setGender] = useState('F'); 
    const [degree, setDegree] = useState('Information Systems'); 
    const [intakeYear, setIntakeYear] = useState(2021); 
    const [telegram, setTelegram] = useState('berrrniice'); 
    const [phoneNum, setPhoneNum] = useState('81234567'); 
    const [phoneNumVisibility, setPhoneNumVisibility] = useState(true);
    const [addressStreet1, setAddressStreet1] = useState('');
    const [addressStreet2, setAddressStreet2] = useState('');
    const [addressBuilding, setAddressBuilding] = useState('');
    const [addressUnit, setAddressUnit] = useState('');
    const [addressPostal, setAddressPostal] = useState('');
    const [nokName, setNokName] = useState('Mary');
    const [nokNumber, setNokNumber] = useState('98765432'); 
    const [nokRelationship, setNokRelationship] = useState('Mother'); 
    const [bloodType, setBloodType] = useState('AB+');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [vaccinationStatus, setVaccinationStatus] = useState('');



}

export default function MyApp() {
    return (
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    );
  }

function UpdateDetailsPage() { 
    return (
        <div>
            <UpdateDetailsForm></UpdateDetailsForm>
            <MyApp></MyApp>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UpdateDetailsPage />);