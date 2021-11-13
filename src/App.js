import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import AddClientForm from './components/AddClientForm/AddClientForm';
import DisplayClients from './components/DisplayClients/DisplayClients';
import ErrorSnackbar from './components/ErrorSnackBar/ErrorSnackBar';
import SearchForm from './components/Searchform/Searchform';
import { deleteClientThunk } from './store/Thunks';

const App = function () {
  const dispatch = useDispatch();
  const curStreet = useSelector(state => state.address.curStreet);
  const curHouse = useSelector(state => state.address.curHouse);
  const curFlat = useSelector(state => state.address.curFlat);

  const deleteClientCallback = addressId => {
    dispatch(deleteClientThunk(addressId));
  };
  const clients = useSelector(state => state.clients.clientsList);

  return (
    <div className="App">
      return <ErrorSnackbar />;
      <SearchForm />
      {clients && (
        <DisplayClients clients={clients} onDeleteClient={deleteClientCallback} />
      )}
      <AddClientForm street={curStreet} house={curHouse} flat={curFlat} />
    </div>
  );
};

export default App;
