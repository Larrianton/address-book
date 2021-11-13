import {
  ADD_CLIENT,
  DELETE_CLIENT,
  GET_CLIENTS,
} from '../../../constants/ActionTypes/clientsActionTypes';
import { ERROR_MESSAGE } from '../../../constants/ErrorMessage';
import { addClient, bindClient, deleteClient } from '../../../services/apiEditClients';
import { getClients } from '../../../services/apiSearch';
import { setError, setLoading } from '../../actions/appActions/appActions';

export const getClientsThunk = addressId => dispatch => {
  // eslint-disable-next-line no-debugger
  debugger;
  dispatch(setLoading(true));
  getClients(addressId)
    .then(res => {
      if (res.data) {
        const clientsList = res.data;
        dispatch({ type: GET_CLIENTS, clientsList });
        dispatch(setLoading(false));
      } else {
        setError(ERROR_MESSAGE);
      }
    })
    .catch(err => {
      dispatch(setError(ERROR_MESSAGE));
      dispatch(setLoading(false));
    });
};

export const deleteClientThunk = clientId => dispatch => {
  dispatch(setLoading(true));
  deleteClient(clientId)
    .then(res => {
      dispatch({ type: DELETE_CLIENT, id: clientId });
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setError(ERROR_MESSAGE));
      dispatch(setLoading(false));
    });
  dispatch(setLoading(false));
};

export const addClientThunk = (id, name, phone, email, bindId) => dispatch => {
  dispatch(setLoading(true));
  // eslint-disable-next-line no-debugger
  debugger;
  addClient(id, name, phone, email, bindId)
    .then()
    .catch(err => {
      dispatch(setError(ERROR_MESSAGE));
      dispatch(setLoading(false));
    });
  bindClient(bindId, id)
    .then(res => {
      dispatch({ type: ADD_CLIENT, name, id });
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setError(ERROR_MESSAGE));
      dispatch(setLoading(false));
    });
};
