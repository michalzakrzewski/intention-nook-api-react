import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import IntentionComponent from './components/intention/IntentionComponent';
import HeaderComponent from './components/layout/HeaderComponent';
import IntentionDetailsComponent from './components/intention/IntentionDetailsComponent';

function App() {
  return (


    <div className='App'>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<IntentionComponent />}></Route>
            <Route path='/intentions' element={<IntentionComponent />}></Route>
            <Route path="/intention/:intentionId" element={<IntentionDetailsComponent />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
