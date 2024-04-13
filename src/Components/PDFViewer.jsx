import React from 'react';

const PDFViewer = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <embed
        src="../assets/resume.pdf" 
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PDFViewer;
