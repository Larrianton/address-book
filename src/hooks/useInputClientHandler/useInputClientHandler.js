import { useState } from 'react';

export const useInputClientHandler = () => {
  const [name, setName] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [error, setError] = useState('');
  return { name, setName, phone, setPhone, email, setEmail, error, setError };
};
