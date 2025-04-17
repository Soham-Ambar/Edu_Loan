import React from 'react';
import { useNavigate } from 'react-router-dom';

function Unsuccessful() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>😔 Sorry, you can't apply for this loan</h2>
      <button onClick={() => navigate('/eligible-loans')}>
        Check Other Loans
      </button>
    </div>
  );
}

export default Unsuccessful;
