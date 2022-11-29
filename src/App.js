import { useEffect, useState } from 'react';
import './App.css';
import useCompletes from './useCompletes';
import One from './MyComponents';
import Quiz from './QuizComponents';

function App() {

  

  return (
    <div className="App">
      
      {/* <One/> */}

      <Quiz />

    </div>
  );
}

export default App;
