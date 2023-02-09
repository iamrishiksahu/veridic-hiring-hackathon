
import './App.css';
import { Routes, Route } from 'react-router-dom'
import AllPosts from './components/AllPosts';

function App() {


  return (


      <Routes>

        <Route exact path='/' element={<AllPosts />} />
      </Routes>


  );
}

export default App;
