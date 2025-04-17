// components/LoanPredictor.js
import React, { useState } from 'react';

function LoanPredictor() {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    cgpa: '',
    marks10: '',
    marks12: '',
    familyIncome: '',
    loanTenure: '',
    purpose: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prediction Data:', formData);
    // You can add prediction logic or redirect to results page here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Loan Eligibility Predictor</h2>

      <label>Gender:</label><br />
      <select name="gender" required value={formData.gender} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select><br />

      <label>Age:</label><br />
      <input type="number" name="age" required value={formData.age} onChange={handleChange} /><br />

      <label>CGPA:</label><br />
      <input type="number" step="0.01" name="cgpa" required value={formData.cgpa} onChange={handleChange} /><br />

      <label>10th Marks (%):</label><br />
      <input type="number" name="marks10" required value={formData.marks10} onChange={handleChange} /><br />

      <label>12th Marks (%):</label><br />
      <input type="number" name="marks12" required value={formData.marks12} onChange={handleChange} /><br />

      <label>Family Income (INR):</label><br />
      <input type="number" name="familyIncome" required value={formData.familyIncome} onChange={handleChange} /><br />

      <label>Loan Tenure (Years):</label><br />
      <input type="number" name="loanTenure" required value={formData.loanTenure} onChange={handleChange} /><br />

      <label>Purpose of Loan:</label><br />
      <select name="purpose" required value={formData.purpose} onChange={handleChange}>
        <option value="">Select</option>
        <option value="UG">Undergraduate (UG)</option>
        <option value="PG">Postgraduate (PG)</option>
        <option value="Diploma">Diploma</option>
      </select><br /><br />

      <button type="submit">Predict</button>
    </form>
  );
}

export default LoanPredictor;
