import {
  SET_FLAT,
  SET_HOUSE,
  SET_STREET,
} from '../../../constants/ActionTypes/searchActionTypes';

export const setCurStreet = curStreet => ({
  type: SET_STREET,
  curStreet,
});

export const setCurHouse = curHouse => ({
  type: SET_HOUSE,
  curHouse,
});
export const setCurFlat = curFlat => ({
  type: SET_FLAT,
  curFlat,
});
