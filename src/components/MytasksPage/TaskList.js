import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function TaskList({
  tasks,
  onTaskClick,
  droppableId,
  isDragDisabled,
}) {
  if (tasks.length === 0) {
    return (
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Typography>
              Aucune tâches
            </Typography>
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
                  ref={dragProvided.innerRef}
                  {...dragProvided.draggableProps}
                  {...dragProvided.dragHandleProps}
                  secondaryAction={task.value}
                  disablePadding
                >
                  {
                    onTaskClick === null
                      ? (<ListItemText primary={task.name} />)
                      : (
                        <ListItemButton dense role="button" onClick={() => onTaskClick(task)}>
                          <ListItemText primary={task.name} />
                        </ListItemButton>
                      )
                  }

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
