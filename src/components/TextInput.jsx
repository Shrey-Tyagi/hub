import { useState } from 'react';
import './TextInput.css';

function TextInput({ label, value, onChange, onFileUpload, placeholder }) {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const text = e.target.value;
    setCharCount(text.length);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    onChange(text);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        onChange(content);
        setCharCount(content.length);
        setWordCount(content.trim() ? content.trim().split(/\s+/).length : 0);
      };
      reader.readAsText(file);
    }
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  return (
    <div className="text-input-container">
      <div className="text-input-header">
        <label className="text-input-label">{label}</label>
        <div className="text-input-stats">
          <span>{charCount} chars</span>
          <span>{wordCount} words</span>
        </div>
      </div>
      <div className="text-input-wrapper">
        <textarea
          className="text-input"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          spellCheck={false}
        />
        <div className="text-input-actions">
          <label className="file-upload-label">
            <input
              type="file"
              onChange={handleFileUpload}
              className="file-upload-input"
              accept=".txt,.json,.xml,.js,.jsx,.ts,.tsx,.css,.html"
            />
            📁 Upload File
          </label>
        </div>
      </div>
    </div>
  );
}

export default TextInput;

