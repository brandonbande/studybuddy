import './styles.css'
import './App.css';
import './styles/Navbar.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Footer from './components/Footer';
import Learn from './pages/Learn';
import UpdatedNavbar from './components/UpdatedNavbar';
import Menu from './components/Menu';
//import Login from './components/Login';
//import FirebaseGoogleAuth from './FirebaseGoogleAuth';
//import SampleCrud from './SampleCrud';

function App() {
 
  return ( 
    <div className="App">
      <Router>
        <UpdatedNavbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/board' element={<Leaderboard />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/profile' element={<Profile />} />  
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
