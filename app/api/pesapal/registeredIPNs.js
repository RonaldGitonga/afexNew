import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Include the access token, adjust the URL, and headers accordingly
        const token = await getAccessToken(); // Assuming you have a function to get the access token
        const apiUrl = process.env.APP_ENVIRONMENT === 'sandbox'
          ? 'https://cybqa.pesapal.com/pesapalv3/api/URLSetup/GetIpnList'
          : 'https://pay.pesapal.com/v3/api/URLSetup/GetIpnList';

        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const response = await axios.get(apiUrl, { headers });

        setResponse(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your React component content */}
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default YourComponent;
