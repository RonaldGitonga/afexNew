import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getTransactionStatus = async () => {
      try {
        // Include the access token, adjust the URL, and headers accordingly
        const token = await getAccessToken(); // Assuming you have a function to get the access token
        const OrderTrackingId = '1c298d87-ef37-4e7c-ab33-de3dfccce94d'; // replace with the actual OrderTrackingId
        const OrderMerchantReference = '92582762768768274'; // replace with the actual OrderMerchantReference

        const apiUrl = process.env.APP_ENVIRONMENT === 'sandbox'
          ? `https://cybqa.pesapal.com/pesapalv3/api/Transactions/GetTransactionStatus?orderTrackingId=${OrderTrackingId}`
          : `https://pay.pesapal.com/v3/api/Transactions/GetTransactionStatus?orderTrackingId=${OrderTrackingId}`;

        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const response = await axios.get(apiUrl, { headers });

        setResponse(response.data);
      } catch (error) {
        console.error('Error getting transaction status:', error);
      }
    };

    getTransactionStatus();
  }, []);

  return (
    <div>
      {/* Your React component content */}
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default YourComponent;
