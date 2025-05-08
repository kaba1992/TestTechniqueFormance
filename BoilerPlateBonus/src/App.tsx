import LandingPage from './pages/LandingPage';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
