// Import necessary modules and components
import React, { useRef, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Define Uploadimage component
const Uploadimage = () => {
  // Create a reference to the file input element
  const fileInputRef = useRef(null);

  // States for selected file, preview, and file name
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("assets/img/obanshirecubscouts-placeholder.webp");
  const [fileName, setFileName] = useState("");

  // Function to trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update selected file, file name, and preview
      setSelectedFile(file);
      setFileName(file.name);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (selectedFile) {
      // Create FormData object and append file and file name
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileName', fileName);

      try {
        // Send POST request to upload endpoint
        const response = await axios.post('http://localhost:5001/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  // Render component JSX
  return (
    <>
      {/* Render navigation */}
      <header>
        <Nav />
      </header>
      <main>
        {/* Render hero section with title */}
        <Hero title="Upload Image" herouploadimageoverlay='hero-uploadimageoverlay' />
        <div className="uploadimage">
          {/* Render image preview */}
          <img src={preview} alt="Preview" className="uploadimage-img" />
          {/* Render hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {/* Render button to trigger file input click */}
          <button type="button" className="btn btn-uploadimage" onClick={handleUploadClick}>
            <FontAwesomeIcon icon={faUpload} /> Upload image
          </button>
          {/* Render button to submit form */}
          <button className="btn btn-uploadimage-submit" onClick={handleSubmit}>Submit</button>
        </div>
      </main>
      {/* Render footer */}
      <Footer />
    </>
  );
};

// Export Uploadimage component
export default Uploadimage;
