import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanFormPage from './components/LoanFormPage';
import EligibleLoansPage from './components/EligibleLoans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanFormPage />} />
        <Route path="/eligible-loans" element={<EligibleLoansPage />} />
      </Routes>
    </Router>
  );
}

export default App;
