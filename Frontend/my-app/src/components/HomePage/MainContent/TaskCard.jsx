import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ tasks }) {
  const isDataVisible = tasks.length > 0;

  return (
    <div className="task-container">
      {isDataVisible ? (
        tasks.map((task, index) => (
          <Draggable key={task._id} draggableId={task._id} index={index}>
            {(provided) => (
              <div 
                className="task-card flex flex-col px-3.5 py-3.5 mt-4 w-full text-sm font-medium rounded-lg border border-solid bg-stone-50 border-neutral-200 text-zinc-600"
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
              >
                <div className="text-base">{task.title}</div>
                <div className="mt-1 text-neutral-500">{task.description}</div>
                <div className={`px-2 py-1.5 mt-3.5 text-xs text-white whitespace-nowrap ${task.priority === 'Urgent' ? 'bg-red-400' : 'bg-green-400'} rounded-lg`}>
                  {task.priority}
                </div>
                <div className="mt-1 text-neutral-500">{task.status}</div>
                <div className="mt-1 text-neutral-500">{new Date(task.deadline).toLocaleDateString()}</div>
              </div>
            )}
          </Draggable>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default TaskCard;
