import React from 'react';
import TaskColumn from './TaskColumn';

const columns = [
  { title: "To do", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/388aec56db435a6de6128e0bda29160bd993169c1c3f0b22f2d2c67ebbe98b70?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" },
  { title: "In progress", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/21b71c1e0ec893b02be7bbbc442d112d109cba76530c987c1dad72fa35ede56e?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" },
  { title: "Under review", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/236286562111ccc4f7108f1599f706c816b9763aed276afbdb141f25d3075e09?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" },
  { title: "Finished", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/736180fee30953ad099bcda9f8b44b35cef20096f807280ad22e787f7a1a5b2c?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" }
];

function TaskBoard() {
  return (
    <section className="p-4 mt-4 bg-white rounded-lg max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {columns.map((column, index) => (
          <TaskColumn key={index} title={column.title} icon={column.icon} />
        ))}
      </div>
    </section>
  );
}

export default TaskBoard;
