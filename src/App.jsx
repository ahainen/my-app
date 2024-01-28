import './App.css';
import { Rive } from 'rive-react';

function MyButton() {
  return (
    <button className='px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold'>I'm a button</button>
  );
}

function App() {
  return (
    <div className="App">
      <div className='flex'>
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
      <div>
          
            <Rive src="switch.riv" />
            
      </div>


    </div>
  );
}

export default App;
