
import './App.css';
import './styles.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
//import FirebaseGoogleAuth from './FirebaseGoogleAuth';
//import SampleCrud from './SampleCrud';

function App() {
 
  return ( 
    <div className="App">
      <Router>
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/board' element={<Leaderboard />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
