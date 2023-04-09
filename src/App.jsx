import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import QuoteBox from './components/QuoteBox';
import Footer from './components/Footer';

function App() {
  const colors = [
    'orange',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
    'red',
    'yellow',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const [color, setColor] = useState(colors[randomIndex]);
  const [animation, setAnimation] = useState('animated');
  function handleClick() {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setAnimation('animated');
  }
  return (
    <div className="App">
      <QuoteBox color={color} setColor={handleClick} animation={animation}/>
      <Footer/>
    </div>
  );
}

export default App;
