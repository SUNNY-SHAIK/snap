import logo from './logo.svg';
import './App.css';
import Classcomponent from "./Classcomponent"

import {BrowserRouter,Routes,Route}from 'react-router-dom'
import index.home from'./Index.home'
import Contact from './Contact'
import About from './About'

function App() {
  return (
    <div className="App">
      <Classcomponent/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      {/*<Classcomponent/>*/}
    </div>
  );
}

export default App;
