import React from 'react';
import HexCombiner from "./components/HexCombiner/HexCombiner";
import TaskList from './components/TaskList';

const App: React.FC = () => {
    return (
        <div className="App">
            <div style={{backgroundColor: "white"}}>
                <HexCombiner/>
            </div>
            <TaskList/>
        </div>
    );
};

export default App;
