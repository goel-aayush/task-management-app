import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';

const columns = [
  { id: 'Open Todo', title: "Open Todo", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/388aec56db435a6de6128e0bda29160bd993169c1c3f0b22f2d2c67ebbe98b70?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" },
  { id: 'In Progress', title: "In Progress", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/21b71c1e0ec893b02be7bbbc442d112d109cba76530c987c1dad72fa35ede56e?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" },
  { id: 'Under Review', title: "Under Review", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/236286562111ccc4f7108f1599f706c816b9763aed276afbdb141f25d3075e09?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" },
  { id: 'Complete', title: "Complete", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/736180fee30953ad099bcda9f8b44b35cef20096f807280ad22e787f7a1a5b2c?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" }
];

function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
        try {
            const storedUserId = localStorage.getItem('user_id');
            if (!storedUserId) {
                console.error('User ID is not found in localStorage');
                return;
            }
            const response = await axios.get('https://authentic-courtesy-production.up.railway.app/api/TaskRoutes', {
                params: { userId: storedUserId } 
            });
            const tasks = response.data.Task_Routes;
            setTasks(tasks); 
        } catch (error) {
            console.error('Error fetching task data:', error);
        }
    };

    fetchTasks();
  }, []);

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const newTasks = Array.from(tasks);
    const [movedTask] = newTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    newTasks.splice(destination.index, 0, movedTask);

    setTasks(newTasks);
    console.log(movedTask._id);
    try {
      await axios.patch(`https://authentic-courtesy-production.up.railway.app/api/TaskRoutes/${movedTask._id}`, { status: movedTask.status });
      console.log('Status updated');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  console.log()
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <section className="p-4 mt-4 bg-white rounded-lg max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {columns.map((column) => (
            <TaskColumn 
                key={column.id} 
                columnId={column.id} 
                title={column.title} 
                icon={column.icon} 
                tasks={tasks.filter(task => task.status === column.title)} 
            />
          ))}
        </div>
      </section>
    </DragDropContext>
  );
}

export default TaskBoard;
