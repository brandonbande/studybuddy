import { Reorder } from '@mui/icons-material';
import React,{useState , useEffect} from 'react'
import {Link , useLocation} from 'react-router-dom'


function Navbar2() {

    const [expandNavbar, setexpandNavbar] = useState(false);

    const location = useLocation();

    useEffect( //collapse the navbar 
        ()=>{
            setexpandNavbar(false);
        },[location]
    );



  return (
    <div className='navbar'>
        <div className='toggleButton'  id ={expandNavbar ? 'open' : 'close'}>
            <button onClick={() =>setexpandNavbar((prev)=>!prev)}>
                <Reorder />
            </button>
        </div>

        <div className='links'> 
                <Link to = '/'>Home</Link>
                <Link to = '/quiz'>Quiz</Link>
                <Link to = '/blog'>Blog</Link>
                <Link to = '/board'>Leaderboard</Link>
                <Link to = '/profile'>{localStorage.getItem('name')}</Link>
                <img src={localStorage.getItem("profilePic")} />
            </div>
        
    </div>
  )
}

export default Navbar2