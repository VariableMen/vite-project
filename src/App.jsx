
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Root from './components/Root';
import About from './components/About';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
