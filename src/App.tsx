import React from 'react';
import HexCombiner from "./components/HexCombiner/HexCombiner";
import TaskList from './components/TaskList';

const App: React.FC = () => {
    return (
        <div className="App">
            <TaskList />
            <HexCombiner />
        </div>
    );
};

export default App;
