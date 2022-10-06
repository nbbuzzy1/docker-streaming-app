import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    axios.get('/api/get').then((res) => console.log(res));
  }, []);

  return <Typography variant="h3">Hello!</Typography>;
};
