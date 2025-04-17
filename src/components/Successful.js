import React from 'react';

function Successful() {
  return (
    <div>
      <h2>Congratulations! You can apply for this loan.</h2>
      <button onClick={() => alert("Proceeding to application")}>Apply Now</button>
    </div>
  );
}

export default Successful;
