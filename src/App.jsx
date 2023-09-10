import './App.css';

function MyButton() {
  return (
    <button className='p-12'>I'm a button</button>
  );
}

function App() {
  return (
    <div className="App">
      
      <MyButton />
      <MyButton />
      <MyButton />


    </div>
  );
}

export default App;
