import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import StartPage from './StartPage';
import MainPage from './MainPage';
import Quote from './Quote';

const App = () => (
  <>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/App" exact component={MainPage} />
        <Route path="/Quote" exact component={Quote} />
      </Switch>
    </main>
  </>
);

export default App;
