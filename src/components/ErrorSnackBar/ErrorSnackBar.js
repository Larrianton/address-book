import React from 'react';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';

import { setError } from '../../store/actions/appActions/appActions';

const Alert = React.forwardRef(
  (
    // eslint-disable-next-line react/jsx-props-no-spreading
    props,
    ref,
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />,
);

const ErrorSnackbar = function () {
  const error = useSelector(state => state.app.error);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setError(null));
  };

  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
export default ErrorSnackbar;
