import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeCards from './components/Card/Home/Homecards';
import LandingPage from './components/Card/Landing/LandingPage';
import FormCreate from './components/Card/Form/CreateForm';
import Detail from './components/Card/Detail/Detail';


function App() { 

  return (
    <div className="App">
      <div className='card'>
        <h1 className='title'>The Dogs Webpage</h1>
        <Routes>
          <Route path='/home' element={<HomeCards/>} />  
          <Route path='/create' element={<FormCreate/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/' element={<LandingPage/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
