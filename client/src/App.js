import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeCards from './components/Card/Home/Homecards';
import LandingPage from './components/Card/Landing/LandingPage';
import FormCreate from './components/Card/Form/CreateForm';

const URL = 'http://localhost:3001/dogs'

function App() { 

  return (
    <div className="App">
      <h1>The Dogs Webpage</h1>
      <Routes>
        <Route path='/home' element={<HomeCards/>} />  
        <Route path='/create' element={<FormCreate/>}/>
        <Route path='/' element={<LandingPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
