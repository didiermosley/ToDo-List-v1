import './App.css';
import { MainContainer } from './MainContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header2 from './components/Header2';



function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<MainContainer/>}/>
                <Route path="/h2" element={<Header2/>}/>
                {/* Header2 is just for  testing*/}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
