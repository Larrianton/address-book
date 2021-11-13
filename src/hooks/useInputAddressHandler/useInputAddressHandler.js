import { useState } from 'react';

export const useInputAddressHandler = () => {
  const [street, setStreet] = useState({ name: ' ' });
  const [house, setHouse] = useState({ name: ' ' });
  const [flat, setFlat] = useState({ name: ' ' });
  return { street, setStreet, house, setHouse, flat, setFlat };
};
