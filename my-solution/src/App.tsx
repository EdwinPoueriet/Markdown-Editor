import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
function App() {
  const [markdown, setMarkdown] = useState<string>('');
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="header_text">Edwin's Markdown</h1>
        </div>
        <div className="content">
          <textarea
            autoFocus
            className="markdown markdown-input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows={5}
          />
          <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
