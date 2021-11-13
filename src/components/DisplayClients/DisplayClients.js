import React from 'react';

import { CircularProgress, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Client from './Client/Client';

const DisplayClients = function (props) {
  const isLoading = useSelector(state => state.app.isLoading);

  if (isLoading) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <Grid container>
      <ol>
        {props.clients.map(client => (
          <Client
            key={client.id}
            id={client.id}
            onDeleteClient={props.onDeleteClient}
            value={client.name}
          />
        ))}
      </ol>
    </Grid>
  );
};

export default DisplayClients;
