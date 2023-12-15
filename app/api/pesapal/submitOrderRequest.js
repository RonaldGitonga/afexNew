import React, { useEffect, useState } from 'react';
import axios from 'axios';
  
const YourComponent = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const submitOrder = async () => {
      try {
        // Include the access token, adjust the URL, and headers accordingly
        const token = await getAccessToken(); // Assuming you have a function to get the access token
        const APP_ENVIROMENT = 'sandbox'; // Replace with your actual environment

        const submitOrderUrl = APP_ENVIROMENT === 'sandbox'
          ? 'https://cybqa.pesapal.com/pesapalv3/api/Transactions/SubmitOrderRequest'
          : 'https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest';

        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        // Request payload
        const merchantreference = Math.floor(Math.random() * 1000000000000000000);
        const phone = '0768168060';
        const amount = 10.00;
        const callbackurl = 'https://12eb-41-81-142-80.ngrok-free.app/pesapal/response-page.php';
        const branch = 'UMESKIA SOFTWARES';
        const first_name = 'Alvin';
        const middle_name = 'Odari';
        const last_name = 'Kiveu';
        const email_address = 'alvo967@gmail.com';

        const data = {
          id: `${merchantreference}`,
          currency: 'KES',
          amount: amount,
          description: 'Payment description goes here',
          callback_url: callbackurl,
          notification_id: 'your_ipn_id', // Replace with your actual IPN ID
          branch: branch,
          billing_address: {
            email_address: email_address,
            phone_number: phone,
            country_code: 'KE',
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            line_1: 'Pesapal Limited',
            line_2: '',
            city: '',
            state: '',
            postal_code: '',
            zip_code: '',
          },
        };

        const response = await axios.post(submitOrderUrl, data, { headers });

        setResponse(response.data);
      } catch (error) {
        console.error('Error submitting order:', error);
      }
    };

    submitOrder();
  }, []);

  return (
    <div>
      {/* Your React component content */}
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default YourComponent;
