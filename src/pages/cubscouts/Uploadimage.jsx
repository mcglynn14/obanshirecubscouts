import React, { useRef, useState } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Uploadimage = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("assets/img/obanshirecubscouts-placeholder.webp");
  const [fileName, setFileName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileName', fileName);

      try {
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

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Upload Image" herouploadimageoverlay='hero-uploadimageoverlay' />
        <div className="uploadimage">
          <img src={preview} alt="Preview" className="uploadimage-img" />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button type="button" className="btn btn-uploadimage" onClick={handleUploadClick}>
            <FontAwesomeIcon icon={faUpload} /> Upload image
          </button>
          <button className="btn btn-uploadimage-submit" onClick={handleSubmit}>Submit</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Uploadimage;
