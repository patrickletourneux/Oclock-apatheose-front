import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function TaskList({
  tasks, onTaskClick, droppableId, isDragDisabled,
}) {
  if (tasks.length === 0) {
    return (
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Typography>Aucune tâche</Typography>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <List ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.draggableId || task.id.toString()}
              index={index}
              isDragDisabled={isDragDisabled}
            >
              {(dragProvided) => (
                <ListItem
                  sx={{
                    height: '60px',
                    width: 'auto',
                    backgroundColor: '#46C2CF',
                    borderRadius: '7px',
                    margin: '15px 15px',
                    padding: '15px',
                    fontSize: '20px',
                    // fontWeight: '600',
                    fontFamily: 'Nunito',
                    color: 'white',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
                  }}
                  ref={dragProvided.innerRef}
                  {...dragProvided.draggableProps}
                  {...dragProvided.dragHandleProps}
                  secondaryAction={task.value}
                  disablePadding
                >
                  {onTaskClick === null ? (
                    <ListItemText
                      primary={(
                        <Typography
                          sx={{
                            width: '80%',
                            fontWeight: '700',
                            color: 'white',
                            fontSize: '20px',
                            padding: '5px',
                          }}
                        >
                          {task.name}
                        </Typography>
                      )}
                    />
                  ) : (
                    <ListItemButton
                      // dense
                      role="button"
                      onClick={() => onTaskClick(task)}
                    >
                      <ListItemText primary={task.name} />
                    </ListItemButton>
                  )}
                </ListItem>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
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
  onTaskClick: PropTypes.func,
  droppableId: PropTypes.string,
  isDragDisabled: PropTypes.bool,
};

TaskList.defaultProps = {
  onTaskClick: null,
  droppableId: '',
  isDragDisabled: false,
};

export default TaskList;
