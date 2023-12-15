import React, { useEffect } from 'react';
import axios from 'axios';

const YourComponent = ({ pinCallbackResponse }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/your-endpoint', pinCallbackResponse, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Data successfully sent to server', response.data);
      } catch (error) {
        console.error('Failed to send data to server', error);
      }
    };

    // Call the function when the component mounts or when pinCallbackResponse changes
    fetchData();
  }, [pinCallbackResponse]);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default YourComponent;
