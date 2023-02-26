import React from 'react';
import './App.css';
import AppHeader from './ViewComponents/AppHeader';
import LibraryArea from './ViewComponents/LibraryArea';
import MainContainer from './ViewComponents/MainContainer';

function App() {
  return (
    <div className="App">
			<AppHeader/>
			<MainContainer/>
			{/*<LibraryArea/>*/}
			{/*<VideoEditor/>*/}
    </div>
  );
}

export default App;
