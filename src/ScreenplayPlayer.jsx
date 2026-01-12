import { useState } from 'react';
import './ScreenplayPlayer.css';

export default function ScreenplayPlayer() {
  const [screenplay, setScreenplay] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(-1);
  const [currentLine, setCurrentLine] = useState(-1);
  const [currentWord, setCurrentWord] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // For now, this is a placeholder. In a real app, you'd load screenplays from storage or API
  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <h1>Screenplay Player</h1>
        <button 
          className="dark-mode-toggle" 
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="section">
        <h2>Load Screenplay</h2>
        <p>This feature is under development. Please use the Generator to create and play screenplays.</p>
      </div>
    </div>
  );
}
