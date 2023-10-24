import './App.css';
import {ComponentTest} from './Components/ComponentTest';
import { Owner } from './Components/Owner';

function App() {
  return (
    <div className='App'>
      <ComponentTest name="Christer" testNumber={3} isLoggedIn={true}/>
      <Owner name={{first: 'Christer', middle: 'Justad', last: 'Krane'}}/>
      
    </div>
  );
}

export default App;
