import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import DiffViewer from './components/DiffViewer';
import Formatter from './components/Formatter';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('diff');
  const [originalText, setOriginalText] = useState('');
  const [changedText, setChangedText] = useState('');
  const [showDiff, setShowDiff] = useState(false);

  const handleFindDifference = () => {
    setShowDiff(true);
  };

  const handleClear = () => {
    setOriginalText('');
    setChangedText('');
    setShowDiff(false);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="app-tabs">
          <button
            className={`app-tab ${activeTab === 'diff' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('diff');
              setShowDiff(false);
            }}
          >
            Text Diff
          </button>
          <button
            className={`app-tab ${activeTab === 'formatter' ? 'active' : ''}`}
            onClick={() => setActiveTab('formatter')}
          >
            Formatter
          </button>
        </div>

        {activeTab === 'diff' && (
          <div className="diff-container">
            <div className="diff-inputs">
              <TextInput
                label="Original text"
                value={originalText}
                onChange={setOriginalText}
                placeholder="Enter or paste your original text here..."
              />
              <TextInput
                label="Changed text"
                value={changedText}
                onChange={setChangedText}
                placeholder="Enter or paste your changed text here..."
              />
            </div>
            <div className="diff-actions">
              <button onClick={handleFindDifference} className="diff-btn primary">
                Find Difference
              </button>
              <button onClick={handleClear} className="diff-btn secondary">
                Clear
              </button>
            </div>
            {showDiff && (
              <div className="diff-result">
                <DiffViewer originalText={originalText} changedText={changedText} />
              </div>
            )}
          </div>
        )}

        {activeTab === 'formatter' && (
          <div className="formatter-container">
            <Formatter />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
