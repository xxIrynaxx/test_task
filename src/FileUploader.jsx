import React from 'react';
import Papa from 'papaparse';
import './FileUploader.css';

const FileUploader = ({ onParsed }) => {
  const handleChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: result => {
        onParsed(result.data);
      },
    });
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="styled-file-input"
      />
    </div>
  );
};

export default FileUploader;
