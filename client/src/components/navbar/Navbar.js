import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css'
import axios from 'axios';
import { logout } from '../../action/AuthAction';

const Navbar = () => {
  const token=JSON.stringify(localStorage.getItem('token'));
    const {loading, isAuthenticated,error}=useSelector((state)=>state.user)

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogout=()=>{
     dispatch(logout(navigate));
  }

  return (
    <>
      <nav>
        <div className="navbar_container">
          <ul className="menuItems">
              <div className="logo">
                <span>  SERL LAB</span>
              </div>
            <div className="link">
              <li><Link to="/" data-item='Home'>Home</Link></li>
            </div>
            <div className="link">
              <li><Link to="/faculty" data-item='Home'>Faclty</Link></li>
            </div>
            <div className="link">
              <li><Link to="/phd" data-item='Home'>Phd</Link></li>
            </div>
            <div className="link">
              <li><Link to="/allProject" data-item='Home'>Research</Link></li>
            </div>
            <div className="link">
              <li><Link to="/about" data-item='Home'>About</Link></li>
            </div>
            {
              !isAuthenticated && token ? (
                <div className="link">
              <li><Link to="/auth" data-item='Home'>SignIn / Login</Link></li>
            </div>
              ):(
                <div className="link">
              <span  className='logout' onClick={handleLogout}>Logout</span>
            </div>
              )
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
