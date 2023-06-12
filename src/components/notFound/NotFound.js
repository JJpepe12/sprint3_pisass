import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/home");
  };

  return (
    <ChakraProvider>
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '90px' }}>
        <iframe src="https://giphy.com/embed/xTiN0L7EW5trfOvEk0"  width="350" height="400" ></iframe>
        <p><a href="https://giphy.com/gifs/internet-apple-technology-xTiN0L7EW5trfOvEk0"></a></p>

        
        <Button   style={{
        color:'#FF2153',
        position: 'absolute',
        top: '85%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }} 
      
      onClick={handleLoginClick}>
          Go to Home
        </Button>
      </div>
    </ChakraProvider>
  );
};
