import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Formatter.css';

function Formatter() {
  const [activeTab, setActiveTab] = useState('json');
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [jsonError, setJsonError] = useState('');
  const [xmlInput, setXmlInput] = useState('');
  const [xmlOutput, setXmlOutput] = useState('');
  const [xmlError, setXmlError] = useState('');

  const formatJSON = () => {
    try {
      setJsonError('');
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonOutput(formatted);
    } catch (error) {
      setJsonError(error.message);
      setJsonOutput('');
    }
  };

  const minifyJSON = () => {
    try {
      setJsonError('');
      const parsed = JSON.parse(jsonInput);
      const minified = JSON.stringify(parsed);
      setJsonOutput(minified);
    } catch (error) {
      setJsonError(error.message);
      setJsonOutput('');
    }
  };

  const validateJSON = () => {
    try {
      setJsonError('');
      JSON.parse(jsonInput);
      setJsonOutput('✓ Valid JSON');
    } catch (error) {
      setJsonError(error.message);
      setJsonOutput('');
    }
  };

  const formatXML = (xmlString) => {
    let formatted = '';
    let indent = 0;
    const tab = '  ';
    
    xmlString.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) indent--;
      formatted += tab.repeat(Math.max(0, indent)) + '<' + node.trim() + '>\r\n';
      if (node.match(/^<?\w[^>]*[^\/]$/) && !node.startsWith('<?xml')) indent++;
    });
    
    return formatted.substring(1, formatted.length - 2);
  };

  const handleFormatXML = () => {
    try {
      setXmlError('');
      if (!xmlInput.trim()) {
        setXmlError('XML input is empty');
        return;
      }
      
      // Basic XML validation
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, 'text/xml');
      const parseError = xmlDoc.querySelector('parsererror');
      
      if (parseError) {
        setXmlError('Invalid XML: ' + parseError.textContent);
        setXmlOutput('');
        return;
      }
      
      const formatted = formatXML(xmlInput);
      setXmlOutput(formatted);
    } catch (error) {
      setXmlError(error.message);
      setXmlOutput('');
    }
  };

  const minifyXML = () => {
    try {
      setXmlError('');
      if (!xmlInput.trim()) {
        setXmlError('XML input is empty');
        return;
      }
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, 'text/xml');
      const parseError = xmlDoc.querySelector('parsererror');
      
      if (parseError) {
        setXmlError('Invalid XML: ' + parseError.textContent);
        setXmlOutput('');
        return;
      }
      
      const minified = xmlInput.replace(/>\s+</g, '><').trim();
      setXmlOutput(minified);
    } catch (error) {
      setXmlError(error.message);
      setXmlOutput('');
    }
  };

  const validateXML = () => {
    try {
      setXmlError('');
      if (!xmlInput.trim()) {
        setXmlError('XML input is empty');
        setXmlOutput('');
        return;
      }
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, 'text/xml');
      const parseError = xmlDoc.querySelector('parsererror');
      
      if (parseError) {
        setXmlError('Invalid XML: ' + parseError.textContent);
        setXmlOutput('');
      } else {
        setXmlOutput('✓ Valid XML');
      }
    } catch (error) {
      setXmlError(error.message);
      setXmlOutput('');
    }
  };

  return (
    <div className="formatter">
      <div className="formatter-tabs">
        <button
          className={`formatter-tab ${activeTab === 'json' ? 'active' : ''}`}
          onClick={() => setActiveTab('json')}
        >
          JSON Formatter
        </button>
        <button
          className={`formatter-tab ${activeTab === 'xml' ? 'active' : ''}`}
          onClick={() => setActiveTab('xml')}
        >
          XML Formatter
        </button>
      </div>

      {activeTab === 'json' && (
        <div className="formatter-content">
          <div className="formatter-input-section">
            <div className="formatter-header">
              <h3>JSON Input</h3>
              <div className="formatter-actions">
                <button onClick={formatJSON} className="formatter-btn">Format</button>
                <button onClick={minifyJSON} className="formatter-btn">Minify</button>
                <button onClick={validateJSON} className="formatter-btn">Validate</button>
              </div>
            </div>
            <textarea
              className="formatter-textarea"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='{"key": "value"}'
              spellCheck={false}
            />
            {jsonError && <div className="formatter-error">{jsonError}</div>}
          </div>
          <div className="formatter-output-section">
            <h3>Output</h3>
            {jsonOutput ? (
              <div className="formatter-code">
                <SyntaxHighlighter
                  language="json"
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: '8px' }}
                >
                  {jsonOutput}
                </SyntaxHighlighter>
              </div>
            ) : (
              <div className="formatter-placeholder">Output will appear here...</div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'xml' && (
        <div className="formatter-content">
          <div className="formatter-input-section">
            <div className="formatter-header">
              <h3>XML Input</h3>
              <div className="formatter-actions">
                <button onClick={handleFormatXML} className="formatter-btn">Format</button>
                <button onClick={minifyXML} className="formatter-btn">Minify</button>
                <button onClick={validateXML} className="formatter-btn">Validate</button>
              </div>
            </div>
            <textarea
              className="formatter-textarea"
              value={xmlInput}
              onChange={(e) => setXmlInput(e.target.value)}
              placeholder='<root><item>value</item></root>'
              spellCheck={false}
            />
            {xmlError && <div className="formatter-error">{xmlError}</div>}
          </div>
          <div className="formatter-output-section">
            <h3>Output</h3>
            {xmlOutput ? (
              <div className="formatter-code">
                <SyntaxHighlighter
                  language="xml"
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: '8px' }}
                >
                  {xmlOutput}
                </SyntaxHighlighter>
              </div>
            ) : (
              <div className="formatter-placeholder">Output will appear here...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Formatter;

