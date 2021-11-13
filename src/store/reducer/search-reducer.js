const initialState = {
  streetsList: [],
  housesList: [],
  flatsList: [],
  curStreet: { name: '' },
  curHouse: { name: '' },
  curFlat: { name: '' },
};
// eslint-disable-next-line default-param-last
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STREETS':
      return {
        ...state,
        streetsList: [...action.streetsList],
      };
    case 'GET_HOUSES':
      return {
        ...state,
        housesList: [...action.housesList],
      };
    case 'GET_FLATS':
      return {
        ...state,
        flatsList: [...action.flatsList],
      };
    case 'SET_STREET':
      return {
        ...state,
        curStreet: { ...action.curStreet },
      };
    case 'SET_HOUSE':
      return {
        ...state,
        curHouse: { ...action.curHouse },
      };
    case 'SET_FLAT':
      return {
        ...state,
        curFlat: { ...action.curFlat },
      };
    default:
      return state;
  }
};
