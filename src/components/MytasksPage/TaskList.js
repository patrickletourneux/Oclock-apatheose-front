import PropTypes from 'prop-types';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const getDroppableStyle = (isDragging) => {
  if (isDragging) {
    return { backgroundColor: '#f1f1f1', color: '#000', border: 'solid 2px #aaa' };
  }
  return { backgroundColor: '#fff' };
};

function TaskList({
  tasks, onTaskClick, droppableId, isDragDisabled, isDragging,
}) {
  if (tasks.length === 0) {
    return (
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            sx={{
              minHeight: '4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              ...getDroppableStyle(isDragging),
            }}
            {...provided.droppableProps}
          >
            <Typography>Aucune tâche</Typography>
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    );
  }
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <List
          ref={provided.innerRef}
          sx={getDroppableStyle(isDragging)}
          {...provided.droppableProps}
        >
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
                    fontWeight: '600',
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
                      role="button"
                      onClick={() => onTaskClick(task)}
                    >
                      <ListItemText
                        primary={(
                          <Typography sx={{
                            width: '80%',
                            fontWeight: '700',
                            color: 'white',
                            fontSize: '20px',
                            padding: '5px',
                          }}
                          >{task.name}
                          </Typography>
)}
                      />
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
  isDragging: PropTypes.bool,
};

TaskList.defaultProps = {
  onTaskClick: null,
  droppableId: '',
  isDragDisabled: false,
  isDragging: false,
};

export default TaskList;
