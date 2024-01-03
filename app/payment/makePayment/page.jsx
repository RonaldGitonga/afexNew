'use client'
import React, { useState } from 'react';
import axios from 'axios';




export const getIpnID = async () => {
    //get Access Token 
  try {
    const response = await fetch('https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "consumer_key": "qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW", // Replace with your actual consumer key
        "consumer_secret":"osGQ364R49cXKeOYSpaOnT++rHs=", // Replace with your actual consumer secret
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    bearerToken=JSON.stringify(data.token,null,2)
  } catch (error) {
   
    throw new Error(error.message || 'Failed to fetch Token data');
  }

  //get IPN ID
  try {
    const ipnData = {
      url: 'https://e50a-41-212-41-131.ngrok-free.app/payment/registerIPN',
      ipn_notification_type: 'GET',
    };

    const accessToken = bearerToken// Replace with your actual access token

    const ipnResponse = await axios.post(
      'https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN',
      ipnData,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const ipn_ID=JSON.stringify(ipnResponse.data.ipn_id)
   
  } catch (error) {
    console.error(error);
    throw new Error(error)
  }

  return ipn_ID;
};

