import React, { useEffect } from 'react';

import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useInputAddressHandler } from '../../hooks/useInputAddressHandler/useInputAddressHandler';
import {
  setCurFlat,
  setCurHouse,
  setCurStreet,
} from '../../store/actions/searchActions/searchActions';
import {
  getClientsThunk,
  getFlatsThunk,
  getHousesThunk,
  getStreetsThunk,
} from '../../store/Thunks';

const SearchForm = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStreetsThunk());
  }, []);
  const streets = useSelector(state => state.address.streetsList);
  const houses = useSelector(state => state.address.housesList);
  const flats = useSelector(state => state.address.flatsList);

  const { street, setStreet, house, setHouse, flat, setFlat } = useInputAddressHandler();

  const onStreetChange = (e, newValue) => {
    if (newValue) {
      setStreet(newValue);
      dispatch(setCurStreet(newValue));
      dispatch(getHousesThunk(newValue.id));
    }
  };
  const onHouseChange = (e, newValue) => {
    if (newValue) {
      setHouse(newValue);
      dispatch(setCurHouse(newValue));
      dispatch(getFlatsThunk(newValue.id));
    }
  };
  const onFlatChange = (e, newValue) => {
    if (newValue) {
      setFlat(newValue);
      dispatch(setCurFlat(newValue));
    }
  };
  const onGetClientsClick = () => {
    dispatch(getClientsThunk(flat.id));
  };
  return (
    <Grid container direction="column" justifyContent="flex-start">
      <h2>Введите адрес:</h2>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item>
          <Autocomplete
            value={street}
            onChange={onStreetChange}
            options={streets}
            getOptionLabel={option => option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...params}
                label="Улица"
                variant="outlined"
                fullWidth
                autoFocus
              />
            )}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            value={house}
            onChange={onHouseChange}
            options={houses}
            getOptionLabel={option => option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            style={{ width: 150 }}
            renderInput={params => (
              <TextField
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...params}
                label="Дом"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            value={flat}
            options={flats}
            onChange={onFlatChange}
            getOptionLabel={option => option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            style={{ width: 150 }}
            renderInput={params => (
              <TextField
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...params}
                label="Кв"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Button variant="contained" size="large" onClick={onGetClientsClick}>
          Показать Клиентов
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
