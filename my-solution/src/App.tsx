import { useState } from "react";
import ReactMarkdown from "react-markdown";
import './App.css'
function App() {
  const [markdown, setMarkdown]= useState<string>('');
  return (
    <>
    <div className="container">
      <div className="header">title</div>
      <div className="content">
        <textarea className="mainInput" value={markdown} onChange={(e) => setMarkdown(e.target.value)} rows={5} />
        <ReactMarkdown className="markdownResult">{markdown}</ReactMarkdown>
      </div>
    </div>
    </>
  );
}

export default App;
