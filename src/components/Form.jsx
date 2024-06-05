import React, { useState } from 'react';


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan Number is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <>
      <h1>Form Validation</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" /> 
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNo" />
        </div>
        <div>
          <label>Country:</label>
          <input type="dropdown" name="country" />
        </div>
        <div>
          <label>City:</label>
          <input type="dropdown" name="city" />
        </div>
        <div>
          <label>Pan Number:</label>
          <input type="text" name="panNo" />
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input type="text" name="aadharNo" />
           </div>

        <button type="submit" >Submit</button> 
      </form>
    </>
  );
};

export default Form;
