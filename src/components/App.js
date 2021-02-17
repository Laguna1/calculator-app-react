import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="something display" />
      <ButtonPanel />
      { calculate }
    </>
  );
}

export default App;
