// import logo from './logo.svg';
import './App.css';
import Greet from './Test/props/UsingFunction';
import Welcome from './Test/props/UsingClass';

function App() {
  return (
    <div>
      <Greet name='Arka'/>
      <Greet name='Nayan'/>
      <Greet name='Kabya'/>

      <Welcome name= 'Baba'/>
      <Welcome name= 'Nana'/>
      <Welcome name= 'Kaka'/>
      
    </div>
  );
}

export default App;
