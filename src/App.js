import logo from './logo.svg';
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './Mycopponnet/Home';
// import About from './Mycopponnet/About';
// import Contact from './Mycopponnet/Contact';
import Home from './Mycopponnet/Home';
import styles from './Mycopponnet/style.css';
function App() {
  return (
    <div className="App">


      <Home Count="0"/>
     {/* <nav>
       <ul>
         <li><Link to="/"></Link>Home</li>
         <li><Link to="/about"></Link>About</li>
         <li><Link to="/contact"></Link>Contact</li>
       </ul>
     </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
