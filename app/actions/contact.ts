'use server';

import { FormData } from '../components/articles/Contact';

export async function sendToEmailService(data: FormData) {
  const URL = process.env.SES_URL ?? '';
  try {
    const response = await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to send data to email service');
    }
    return true;
  } catch (error) {
    console.error('Error sending data to email service:');
    return false;
  }
}
