import React from 'react';
import TaskCard from './TaskCard';

const statusLabels = ['To do', 'In progress', 'Under review', 'Finished'];

function App() {
  return (
    <div className="App">
      <TaskCard statusLabels={statusLabels} />
    </div>
  );
}

export default App;
