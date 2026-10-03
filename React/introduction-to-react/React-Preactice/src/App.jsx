import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx';
import Counter from './components/CounterSection/Counter.jsx';
import Toggle from './components/Toggle/Toggle.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Card />
      <Counter />
      <Toggle />
      <Footer />
    </>
  )
}

export default App;
