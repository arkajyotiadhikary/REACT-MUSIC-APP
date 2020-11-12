// import logo from './logo.svg';
import './App.css';
import Greet from './Test/props/UsingFunction';
import Welcome from './Test/props/UsingClass';
import Message from './Test/states/StateExample'

function App() {
  return (
    <div>
      <Greet name='Arka'/>
      <Welcome name= 'Kaka'/>

      <Message/>
      
    </div>
  );
}

export default App;
