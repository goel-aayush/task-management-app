import React from 'react';
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';

function TaskColumn({ title, icon }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-8">
        <div className="flex gap-4 justify-between text-xl text-neutral-600">
          <div>{title}</div>
          <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" alt="" />
        </div>
        <TaskCard />
        <div className="flex gap-5 justify-between p-2 mt-4 text-base rounded-lg text-neutral-200 bg-black">
          {/* <div className="my-auto">Add new</div> */}
          <Link to="/CreateTask" className='my-auto'> Add new</Link>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20818b71c3ce13c107f381418c54401b26dade9d40bd9796094949a1bc97820?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;




// import React from 'react';
// import TaskCard from './TaskCard';
// import { Draggable } from 'react-beautiful-dnd';
// import { Link } from 'react-router-dom';

// function TaskColumn({ title, icon, tasks }) {
//   return (
//     <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col max-md:mt-8">
//         <div className="flex gap-4 justify-between text-xl text-neutral-600">
//           <div>{title}</div>
//           <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" alt="" />
//         </div>
//         <div>
//           {tasks.map((task, index) => (
//             <Draggable key={task._id} draggableId={task._id} index={index}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                 >
//                   <TaskCard task={task} />
//                 </div>
//               )}
//             </Draggable>
//           ))}
//         </div>
//         <div className="flex gap-5 justify-between p-2 mt-4 text-base rounded-lg text-neutral-200 bg-black">
//           <Link to="/CreateTask" className='my-auto'> Add new</Link>
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20818b71c3ce13c107f381418c54401b26dade9d40bd9796094949a1bc97820?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskColumn;
