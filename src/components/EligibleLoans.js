import React from 'react';
import { useLocation } from 'react-router-dom';

function EligibleLoansPage() {
  const { state } = useLocation();
  
  return (
    <div>
      <h2>Eligible Loans for {state.name}</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {/* Placeholder for loan cards */}
        <div style={{ minWidth: 300, marginRight: 10, border: '1px solid #ccc', padding: 10 }}>
          <h4>SBI Global Ed-Vantage</h4>
          <p>Interest: 11.15% p.a.</p>
          <p>Up to ₹1.5 Cr</p>
        </div>
        <div style={{ minWidth: 300, marginRight: 10, border: '1px solid #ccc', padding: 10 }}>
          <h4>Baroda Scholar</h4>
          <p>Interest: 9.7% - 11.15%</p>
          <p>Up to ₹1.5 Cr</p>
        </div>
        {/* You can map eligible loans dynamically from a filter function here */}
      </div>
    </div>
  );
}

export default EligibleLoansPage;
