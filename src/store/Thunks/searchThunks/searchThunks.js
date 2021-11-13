import {
  GET_FLATS,
  GET_HOUSES,
  GET_STREETS,
} from '../../../constants/ActionTypes/searchActionTypes';
import { ERROR_MESSAGE } from '../../../constants/ErrorMessage';
import { getFlats, getHouses, getStreets } from '../../../services/apiSearch';
import { setError } from '../../actions/appActions/appActions';

export const getStreetsThunk = () => dispatch => {
  getStreets()
    .then(res => {
      const streetsList = res.data.filter(el => el.cityId === 1);
      dispatch({ type: GET_STREETS, streetsList });
    })
    .catch(err => {
      const error = err.data;
      dispatch(setError(ERROR_MESSAGE));
    });
};
export const getHousesThunk = id => dispatch => {
  getHouses(id)
    .then(res => {
      const housesList = res.data;
      dispatch({ type: GET_HOUSES, housesList });
    })
    .catch(err => {
      dispatch(setError(ERROR_MESSAGE));
    });
};
export const getFlatsThunk = id => dispatch => {
  getFlats(id)
    .then(res => {
      const flatsList = res.data;
      dispatch({ type: GET_FLATS, flatsList });
    })
    .catch(err => {
      dispatch(setError(ERROR_MESSAGE));
    });
};
