import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const InputLabel = styled('label')({
  display: 'inline-block',
  width: '100%',
  textAlign: 'center',
  padding: '6px 12px',
  margin: '8px 0',
  borderRadius: '4px',
  color: '#333',
  cursor: 'pointer',
});

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsUploaded(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios.post('http://localhost:5105/upload', formData)
      .then(response => {
        console.log(response.data);
        setIsUploaded(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Box>
      <InputLabel htmlFor="upload-sign-up-sheet">
        <Input
          accept=".xslx"
          id="upload-sign-up-sheet"
          type="file"
          onChange={handleFileChange}
          sx={{ display: 'none' }}
          inputProps={{
            'aria-label': 'Upload sign up sheet',
          }}
        />
        <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
          Upload Sign Up Sheet
        </Button>
        {selectedFile && <Typography> File: {selectedFile.name}</Typography>}
      </InputLabel>
      {selectedFile && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button
            variant="contained"
            onClick={handleFormSubmit}
            disabled={isUploaded}
            sx={{ mt: 2 }}
            color={'secondary'}
          >
            {isUploaded ? 'Attendance uploaded successfully!' : 'Confirm Upload'}
          </Button>
        </Box>
      )}
    </Box>
  );
}