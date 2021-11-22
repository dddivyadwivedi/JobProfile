import './App.css';
import {Fragment} from 'react';
import Shortlisted from './Pages/Shortlist/shortlisted'
import Rejected from './Pages/Rejected/rejected'
import {Routes, Route } from 'react-router-dom'
import Nav from './Component/Header/Nav'
import Details from './Pages/Details/details'
import Home from './Pages/Home/Home'




function App() {
  return (
    <Fragment >
     <Nav />
    <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route exact path='/shortlisted' element={<Shortlisted/>} />
      <Route  exact path='/rejected' element={<Rejected/>} />
      <Route exact path='/editCandidate/:id' element = {<Details/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
