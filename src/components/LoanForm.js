import React, { useState } from 'react';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    educationLevel: '',
    studyLocation: '',
    instituteCategory: '',
    loanAmount: '',
    collateral: '',
    coBorrower: '',
    interestRange: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every(val => val.trim() !== '');
    if (!allFilled) {
      alert('Please fill all the fields.');
      return;
    }

    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Education Loan Finder</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:<br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label><br /><br />

        <label>Nationality:<br />
          <select name="nationality" value={formData.nationality} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Indian">Indian</option>
            <option value="Other">Other</option>
          </select>
        </label><br /><br />

        <label>Level of Education:<br />
          <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Diploma">Diploma</option>
          </select>
        </label><br /><br />

        <label>Study Location:<br />
          <label><input type="radio" name="studyLocation" value="India" onChange={handleChange} required /> India</label><br />
          <label><input type="radio" name="studyLocation" value="Abroad" onChange={handleChange} required /> Abroad</label>
        </label><br /><br />

        <label>Institute Category:<br />
          <select name="instituteCategory" value={formData.instituteCategory} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="AA">AA</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="Other">Other</option>
          </select>
        </label><br /><br />

        <label>Loan Amount (INR):<br />
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />
        </label><br /><br />

        <label>Collateral Available:<br />
          <label><input type="radio" name="collateral" value="Yes" onChange={handleChange} required /> Yes</label><br />
          <label><input type="radio" name="collateral" value="No" onChange={handleChange} required /> No</label>
        </label><br /><br />

        <label>Co-Borrower (Parent):<br />
          <label><input type="radio" name="coBorrower" value="Yes" onChange={handleChange} required /> Yes</label><br />
          <label><input type="radio" name="coBorrower" value="No" onChange={handleChange} required /> No</label>
        </label><br /><br />

        <label>Interest Range (%):<br />
          <select name="interestRange" value={formData.interestRange} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="6-8%">6% - 8%</option>
            <option value="8-10%">8% - 10%</option>
            <option value="10-12%">10% - 12%</option>
            <option value="12%+">Above 12%</option>
          </select>
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Form Submitted!</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoanForm;
