import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoanFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    educationLevel: '',
    studyLocation: '',
    instituteCategory: '',
    loanAmount: '',
    collateralAvailable: '',
    coBorrower: '',
    interestRate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/eligible-loans', { state: formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Education Loan Finder</h2>

      <input required name="name" placeholder="Name" value={formData.name} onChange={handleChange} />

      <select required name="nationality" value={formData.nationality} onChange={handleChange}>
        <option value="">Select Nationality</option>
        <option value="Indian">Indian</option>
        <option value="Other">Other</option>
      </select>

      <select required name="educationLevel" value={formData.educationLevel} onChange={handleChange}>
        <option value="">Select Education Level</option>
        <option value="Undergraduate">Undergraduate</option>
        <option value="Postgraduate">Postgraduate</option>
        <option value="Doctorate">Doctorate</option>
      </select>

      <div>
        <label>
          <input type="radio" name="studyLocation" value="India" onChange={handleChange} required />
          India
        </label>
        <label>
          <input type="radio" name="studyLocation" value="Abroad" onChange={handleChange} />
          Outside India
        </label>
      </div>

      <select required name="instituteCategory" value={formData.instituteCategory} onChange={handleChange}>
        <option value="">Select Institute Category</option>
        <option value="Premier">Premier</option>
        <option value="Other">Other</option>
      </select>

      <input required type="number" name="loanAmount" placeholder="Loan Amount" value={formData.loanAmount} onChange={handleChange} />

      <div>
        <label>
          <input type="radio" name="collateralAvailable" value="Yes" onChange={handleChange} required />
          Collateral Yes
        </label>
        <label>
          <input type="radio" name="collateralAvailable" value="No" onChange={handleChange} />
          Collateral No
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="coBorrower" value="Yes" onChange={handleChange} required />
          Co-Borrower Yes
        </label>
        <label>
          <input type="radio" name="coBorrower" value="No" onChange={handleChange} />
          Co-Borrower No
        </label>
      </div>

      <select required name="interestRate" value={formData.interestRate} onChange={handleChange}>
        <option value="">Select Interest Rate Range</option>
        <option value="8-10%">8% - 10%</option>
        <option value="10-12%">10% - 12%</option>
        <option value="12%+">Above 12%</option>
      </select>

      <button type="submit">Find Eligible Loans</button>
    </form>
  );
}

export default LoanFormPage;
