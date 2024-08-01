import React from 'react';

function TaskCard({ tasks, onMove }) {
  const isDataVisible = tasks.length > 0;
  

  return (
    <div className="task-container">
      {isDataVisible ? (
        tasks.map(task => (
          <div key={task._id} className="task-card flex flex-col px-3.5 py-3.5 mt-4 w-full text-sm font-medium rounded-lg border border-solid bg-stone-50 border-neutral-200 text-zinc-600">
            <div className="text-base">{task.title}</div>
            <div className="mt-1 text-neutral-500">{task.description}</div>
            <div className={`px-2 py-1.5 mt-3.5 text-xs text-white whitespace-nowrap ${task.priority === 'Urgent' ? 'bg-red-400' : 'bg-green-400'} rounded-lg`}>
              {task.priority}
            </div>
            <div className="mt-1 text-neutral-500">{task.status}</div>
            <div className="mt-1 text-neutral-500">{new Date(task.deadline).toLocaleDateString()}</div>
            <button onClick={() => onMove(task._id, task.priority)} className="mt-2 p-2 bg-blue-500 text-white rounded">Move</button>
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default TaskCard;
