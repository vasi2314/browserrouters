import logo from './logo.svg';
import './App.css';
import './conste.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Name from './Name';
import Age from './Age';
import Abstract from './Sections/Abstract';
import Contact from './components/Contact';
import Currentskills from './components/Currentskills';
import Educational from './components/Educational';
import Navigation from './components/Navigation';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Navigation/>}/>
        <Route path="/name" element={<Name/>} />
        <Route path="/Age"  element={<Age/>} />
        <Route path="/Abstruct" element={<Abstract/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Currentskills" element={<Currentskills/>}/>
        <Route path="/Educational" element={<Educational/>}/>
       



      </Routes>
    </BrowserRouter>
  );
}

export default App;
