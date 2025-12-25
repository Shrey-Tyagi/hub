import { useMemo } from 'react';
import DiffMatchPatch from 'diff-match-patch';
import './DiffViewer.css';

function DiffViewer({ originalText, changedText }) {
  const dmp = new DiffMatchPatch();

  const diffResult = useMemo(() => {
    if (!originalText && !changedText) {
      return { left: [], right: [] };
    }

    const diffs = dmp.diff_main(originalText || '', changedText || '');
    dmp.diff_cleanupSemantic(diffs);

    // Convert diff to line-based format
    const leftLines = [];
    const rightLines = [];
    let lineNum = 1;

    diffs.forEach(([operation, text]) => {
      const lines = text.split('\n');
      
      lines.forEach((line, index) => {
        // Skip empty last line if it's just a trailing newline
        if (index === lines.length - 1 && line === '' && lines.length > 1) {
          return;
        }

        if (operation === -1) {
          // Deletion - only in left
          leftLines.push({ text: line, lineNum: lineNum, type: 'delete' });
          rightLines.push({ text: '', lineNum: lineNum, type: 'empty' });
          lineNum++;
        } else if (operation === 1) {
          // Insertion - only in right
          leftLines.push({ text: '', lineNum: lineNum, type: 'empty' });
          rightLines.push({ text: line, lineNum: lineNum, type: 'insert' });
          lineNum++;
        } else {
          // Equal - in both
          if (line !== '' || index < lines.length - 1) {
            leftLines.push({ text: line, lineNum: lineNum, type: 'equal' });
            rightLines.push({ text: line, lineNum: lineNum, type: 'equal' });
            lineNum++;
          }
        }
      });
    });

    return { left: leftLines, right: rightLines };
  }, [originalText, changedText]);

  const renderLine = (line, side) => {
    const lineClass = `diff-line diff-line-${line.type}`;
    return (
      <div key={`${side}-${line.lineNum}`} className={lineClass}>
        <span className="diff-line-number">{line.lineNum}</span>
        <span className="diff-line-content">
          {line.text || '\u00A0'}
        </span>
      </div>
    );
  };

  return (
    <div className="diff-viewer">
      <div className="diff-viewer-left">
        <div className="diff-viewer-header">Original Text</div>
        <div className="diff-viewer-content">
          {diffResult.left.map((line) => renderLine(line, 'left'))}
        </div>
      </div>
      <div className="diff-viewer-right">
        <div className="diff-viewer-header">Changed Text</div>
        <div className="diff-viewer-content">
          {diffResult.right.map((line) => renderLine(line, 'right'))}
        </div>
      </div>
    </div>
  );
}

export default DiffViewer;

