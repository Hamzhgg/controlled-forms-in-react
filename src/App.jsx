// src/App.jsx

// import the useState() hook
import { useState } from 'react';

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [ title, setTitle ] = useState('The full name will appear here.');
  const [formData, setFormData] = useState(defaultFormData)


 // const [ firstName, setFirstName ] = useState('')
  //const [ lastName, setLasttName ] = useState('')

  //const HandleFirstNameChange = (evt)=>{
    //setFirstName(evt.target.value)
 // }
  //const HandleLastNameChange = (evt)=>{
    //setLasttName(evt.target.value)
 // }

 function handleChange(e){
  const value = e.target.value
  const key = e.target.name
 // console.log(e.target.name)

 const newFormData = {
  ...FormData,
  [key] : value
 }

 setFormData(newFormData)
 }

  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleLastNameChange}
        />
      </form>
    </>
  );
};

export default App;