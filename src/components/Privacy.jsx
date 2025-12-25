import './Privacy.css';

function Privacy({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Privacy Policy</h2>
        <div className="modal-body">
          <p>
            <strong>Your privacy is important to us.</strong>
          </p>
          <p>
            Hub is designed with privacy in mind. We want to make it clear that:
          </p>
          <ul>
            <li><strong>No Data Storage:</strong> All text comparisons and formatting operations are performed entirely in your browser. We do not store, save, or transmit any of your data to our servers.</li>
            <li><strong>No Tracking:</strong> We do not track your usage or collect any personal information.</li>
            <li><strong>Client-Side Processing:</strong> All operations happen locally on your device, ensuring complete privacy and security of your content.</li>
            <li><strong>No Cookies:</strong> We do not use cookies to track or store information about your usage.</li>
          </ul>
          <p>
            You can use Hub with complete confidence that your data remains private and secure. 
            Everything you type, upload, or compare stays on your device and is never sent to any server.
          </p>
          <p>
            <em>Last updated: {new Date().getFullYear()}</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

