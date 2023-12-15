import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [ipnData, setIpnData] = useState(null);

  useEffect(() => {
    const registerIPN = async () => {
      try {
        // Include the access token, adjust the URL, and headers accordingly
        const token = await getAccessToken(); // Assuming you have a function to get the access token
        const apiUrl = process.env.APP_ENVIRONMENT === 'sandbox'
          ? 'https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN'
          : 'https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN';

        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const data = {
          url: 'https://12eb-41-81-142-80.ngrok-free.app/pesapal/pin.php',
          ipn_notification_type: 'POST',
        };

        const response = await axios.post(apiUrl, data, { headers });

        setIpnData(response.data);
      } catch (error) {
        console.error('Error registering IPN:', error);
      }
    };

    registerIPN();
  }, []);

  return (
    <div>
      {/* Your React component content */}
      {ipnData && (
        <div>
          <p>IPN ID: {ipnData.ipn_id}</p>
          <p>IPN URL: {ipnData.url}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
