import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TaskColumn({ title, icon }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.post('https://task-management-app-1-4svs.onrender.com/api/TaskRoutes');
        const tasks = response.data.Task_Routes;
        const storedUserId = localStorage.getItem('user_id');
        const userTasks = tasks.filter(task => {
          console.log(`Task status: ${task.status}`); // Logging the status of each task
          return task.userId === storedUserId && task.status === title;
        });
        

        setTasks(userTasks);
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTasks();
  }, [title]);
  console.log(tasks);

  const handleMove = async (taskId, currentPriority) => {
    const newPriority = currentPriority === 'Urgent' ? 'Low' : 'Urgent';

    try {
      await axios.patch(`https://task-management-app-1-4svs.onrender.com/api/TaskRoutes/${taskId}`, { priority: newPriority });
      setTasks(tasks.map(task =>
        task._id === taskId ? { ...task, priority: newPriority } : task
      ));
      console.log('Priority updated');
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  };

  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-8">
        <div className="flex gap-4 justify-between text-xl text-neutral-600">
          <div>{title}</div>
          <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" alt="" />
        </div>
        <TaskCard tasks={tasks} onMove={handleMove} />
        <div className="flex gap-5 justify-between p-2 mt-4 text-base rounded-lg text-neutral-200 bg-black">
          <Link to="/CreateTask" className='my-auto'> Add new</Link>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20818b71c3ce13c107f381418c54401b26dade9d40bd9796094949a1bc97820?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;

