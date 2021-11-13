import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Client = function (props) {
  const onDeleteClientClick = () => {
    props.onDeleteClient(props.id);
  };
  return (
    <li>
      {props.value}
      <IconButton onClick={onDeleteClientClick}>
        <Delete />
      </IconButton>
    </li>
  );
};

export default Client;
