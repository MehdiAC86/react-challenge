import { useState } from 'react';
import './App.css';
import CardList from "./components/CardList"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CardList/>
      <Footer/>
    </>
  )
}

export default App
