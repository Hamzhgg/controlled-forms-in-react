// import the useState() hook
import { useState } from 'react';

const defaultFormData = {
  firstName: '',
  lastName: ''
}

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [ title, setTitle ] = useState('The full name will appear here.');
  const  [formData, setFormData] = useState(defaultFormData)


  // const handleFirstNameChange = (evt)=>{
  //   setFirstName(evt.target.value)
  // }
  // const handleLastNameChange = (evt)=>{
  //   setLastName(evt.target.value)
  // }

  function handleChange(e){
    // const { value } = e.target
    // const {name} = e.target

    const {name, value} = e.target;

    const newFormData = {
      ...formData,
      [name] : value,
    }

    setFormData(newFormData)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const {firstName, lastName} = formData;

    setTitle(`${firstName} ${lastName}`)
    setFormData(defaultFormData)
    console.log('FormData that is submitted',formData)
  }

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <button type="submit">Submit Your Name</button>
      </form>
    </>
  );
};

export default App;