import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';

function TaskList({ tasks, ...otherProps }) {
  if (tasks.length === 0) {
    return <Typography>Aucune tâches</Typography>;
  }
  return (
    <List {...otherProps}>
      {tasks.map((task) => (
        <ListItem key={task.id} secondaryAction={task.value} disablePadding>
          <ListItemButton dense role="button" onClick={() => console.log('click')}>
            <ListItemText primary={task.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TaskList;
