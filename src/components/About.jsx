import './About.css';

function About({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>About Hub</h2>
        <div className="modal-body">
          <p>
            Hub is a powerful web-based text comparison and formatting tool designed to help developers, 
            writers, and professionals efficiently compare text documents and format JSON/XML data.
          </p>
          <h3>Features:</h3>
          <ul>
            <li><strong>Text Comparison:</strong> Compare two text documents side-by-side with visual highlighting of differences</li>
            <li><strong>File Upload:</strong> Upload text files directly for comparison</li>
            <li><strong>JSON Formatter:</strong> Format, minify, and validate JSON data with syntax highlighting</li>
            <li><strong>XML Formatter:</strong> Format, minify, and validate XML documents</li>
            <li><strong>Real-time Stats:</strong> View character and word counts for your text inputs</li>
          </ul>
          <p>
            Built with React and modern web technologies, Hub provides a clean, intuitive interface 
            for all your text comparison and formatting needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

