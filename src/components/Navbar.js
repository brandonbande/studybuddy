//imports
import React,{useState , useEffect} from 'react'
import {Link , useLocation} from 'react-router-dom'




function Navbar() {

    //state of expand

    const [expandNavbar, setexpandNavbar] = useState(false);

    const location = useLocation();

    useEffect( //collapse the navbar 
        ()=>{
            setexpandNavbar(false);
        },[location]
    );



  return (
    //there are 2 nav bar identities open and close.First we check if the expandNavbar is true or not.If true we use the open id
    <div className='navbar' id ={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton' onClick={() =>setexpandNavbar((prev)=>!prev)}>
            <button>
                Menu
            </button>
            <div className='links'> 
                <Link to = '/'>Home</Link>
                <Link to = '/quiz'>Quiz</Link>
                <Link to = '/blog'>Blog</Link>
                <Link to = '/board'>{localStorage.getItem("name")}</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar