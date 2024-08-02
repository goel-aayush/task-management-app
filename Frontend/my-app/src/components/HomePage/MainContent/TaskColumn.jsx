// import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';
import { Droppable } from 'react-beautiful-dnd';

function TaskColumn({ columnId, title, icon, tasks }) {
  
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" {...provided.droppableProps} ref={provided.innerRef}>
          <div className="flex flex-col max-md:mt-8">
            <div className="flex gap-4 justify-between text-xl text-neutral-600">
              <div>{title}</div>
              <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" alt="" />
            </div>
            <TaskCard tasks={tasks} />
            {provided.placeholder}
            <div className="flex gap-5 justify-between p-2 mt-4 text-base rounded-lg text-neutral-200 bg-black">
              <Link to="/CreateTask" className='my-auto'> Add new</Link>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20818b71c3ce13c107f381418c54401b26dade9d40bd9796094949a1bc97820?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default TaskColumn;
