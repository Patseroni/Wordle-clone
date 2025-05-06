import { useState } from 'react';
import PageWrapper from './PageWrapper';

function App() {
  const [wordLength, setWordLength] = useState(5);

  return <PageWrapper wordLength={wordLength} setWordLength={setWordLength} />

}

export default App;
