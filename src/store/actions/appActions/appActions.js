import { SET_ERROR, SET_LOADING } from '../../../constants/ActionTypes/appActionTypes';

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});
