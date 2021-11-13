const initialState = {
  clientsList: null,
};
// eslint-disable-next-line default-param-last
export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLIENTS':
      return {
        ...state,
        clientsList: [...action.clientsList],
      };
    case 'DELETE_CLIENT':
      return {
        ...state,
        clientsList: state.clientsList.filter(client => client.id !== action.id),
      };
    case 'ADD_CLIENT':
      return {
        ...state,
        clientsList: [...state.clientsList, { id: action.id, name: action.name }],
      };

    default:
      return state;
  }
};
