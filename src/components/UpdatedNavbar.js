import { Reorder } from '@mui/icons-material';
import React,{useState ,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom';
import '../styles/Navbar.css'

function UpdatedNavbar() {
    const [showLinks, setshowLinks] = useState(false);
    
    const location = useLocation();

    useEffect( //collapse the navbar  
        ()=>{
            setshowLinks(false);
        },[location]
    );
    return (
      <div className='Navbar'>
          <div className='leftSide'>
              <div className='links' id={ showLinks? 'hidden' : ''}>
                <Link to = '/'>Home</Link>
                <Link to = '/quiz'>Quiz</Link>
                <Link to = '/learn'>Learn</Link>
                <Link to = '/board'>Leaderboard</Link>
                  {
                      localStorage.getItem('name') !== ''? <Link to = '/profile'>{localStorage.getItem('name')}</Link>
                      : <a href='./home'>Sign In</a>
                  }
              </div>
              <button onClick={()=>{setshowLinks(!showLinks)}}>
                  <Reorder />
              </button>
              <div>
              </div>
          </div>
          <div className='rightSide'>
              <input type='text' placeholder='Search Here'   />
              <button >Search</button>
          </div>
  
      </div> 
    )
}

export default UpdatedNavbar