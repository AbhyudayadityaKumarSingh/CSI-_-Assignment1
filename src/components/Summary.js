import React from 'react';
import { useLocation } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h1>Form Summary</h1>
      {formData ? (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phoneNo}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>Pan Number: {formData.panNo}</p>
          <p>Aadhar Number: {formData.aadharNo}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Summary;
