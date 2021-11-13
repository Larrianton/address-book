import React from 'react';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useInputClientHandler } from '../../hooks/useInputClientHandler';
import { addClientThunk } from '../../store/Thunks';

const generateId = (min = 1000, max = 9999) =>
  Math.floor(Math.random() * (max - min) + min);

const AddClientForm = function (props) {
  const { street, house, flat } = props;
  const { name, setName, phone, setPhone, email, setEmail, error, setError } =
    useInputClientHandler();

  const isLoading = useSelector(state => state.address.isLoading);
  const dispatch = useDispatch();

  const onAddСlientClick = () => {
    if (phone.trim() !== '') {
      dispatch(addClientThunk(generateId(), name, phone, email, flat.id));
    } else {
      setError('Номер телефона обязателен');
    }
  };
  const onNameChange = e => {
    setName(e.currentTarget.value);
  };
  const onPhoneChange = e => {
    setPhone(e.currentTarget.value);
    setError(null);
  };
  const onEmailChange = e => {
    setEmail(e.currentTarget.value);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <PersonAddIcon />
        </Grid>
        <Grid item>Добавить Жителя</Grid>
      </Grid>
      <Grid container direction="column" justifyContent="flex-start" alignItems="center">
        <Grid item>{`ул.${street.name} д.${house.name} кв.${flat.name}`}</Grid>
        <Grid item>Телефон</Grid>
        <TextField
          value={phone}
          onChange={onPhoneChange}
          autoFocus
          helperText={error}
          size="small"
          margin="dense"
          required
          placeholder="+7999900000"
        />
        <Grid item>Email</Grid>
        <TextField value={email} onChange={onEmailChange} size="small" margin="dense" />
        <Grid item>Ф.И.О</Grid>
        <TextField value={name} onChange={onNameChange} size="small" margin="dense" />
        <LoadingButton
          color="secondary"
          onClick={onAddСlientClick}
          startIcon={<SaveIcon />}
          variant="contained"
          disable={isLoading}
        >
          Добавить клиента
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
export default AddClientForm;
