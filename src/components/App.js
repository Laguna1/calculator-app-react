import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display result="something display" />
      <ButtonPanel />
    </div>
  );
}

export default App;
