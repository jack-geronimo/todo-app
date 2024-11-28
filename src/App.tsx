import React from 'react';
import HexCombiner from "./components/HexCombiner/HexCombiner";
import TaskList from './components/TaskList';

const App: React.FC = () => {
    return (
        <div className="App">
            <TaskList />
            <div style={{backgroundColor: "white"}} >
                <HexCombiner />
            </div>
        </div>
    );
};

export default App;
