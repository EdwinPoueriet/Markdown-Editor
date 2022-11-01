import { useState } from "react";
import ReactMarkdown from "react-markdown";
function App() {
  const [markdown, setMarkdown]= useState('')
  return (
    <div>
      <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} rows={5} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
