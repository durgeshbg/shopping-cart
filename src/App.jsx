import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button counter={counter} setCounter={setCounter} bg='red' color='green' />
      <div aria-label='display'>{counter}</div>
    </>
  );
}

export default App;
