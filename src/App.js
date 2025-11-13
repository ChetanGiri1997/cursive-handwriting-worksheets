import React from 'react';
import CustomizationPanel from './components/CustomizationPanel/CustomizationPanel';
import PreviewSection from './components/PreviewSection/PreviewSection';
import './App.css';

class App extends React.Component {
  state = {
    letters: [], // Manage selected letters
    contentType: 'letters', // Current content type
    difficulty: 'easy', // Difficulty level
    // Add more state variables as needed
  };

  render() {
    return (
      <div className="app">
        <CustomizationPanel />
        <PreviewSection />
      </div>
    );
  }
}

export default App;