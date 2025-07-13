
import logo from '../../assets/logo.png'; // Adjust the path as necessary
 // Adjust the path as necessary
 import '../index.css'
 import {CDN_LOGO} from '../utils/images'; // Adjust the path as necessary
 import { useState } from "react";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus"; // Custom hook to check online status
 import { HiOutlineStatusOnline } from 'react-icons/hi';
import { HiStatusOffline } from 'react-icons/hi';
import '../index.css'; // Import global styles
 


const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus(); // Custom hook to check online status

  

  return(
    <div className='app-header'>
      <div className='logo'>
        <img src={CDN_LOGO} alt="Logo" />
      </div>
      <div className='nav-bar'>
        <ul>
          <li>
           <div className="online-status-container">
             <span>Online Status:</span>
             {onlineStatus ? (
               <HiOutlineStatusOnline className="online-icon" title="Online" />
             ) : (
               <HiStatusOffline className="offline-icon" title="Offline" />
             )}
           </div>
          </li>
          <li><Link to = "/Home">Home</Link></li>
          <li><Link to = "/Grocery">Grocery</Link></li>
          <li><Link to = "/About">About Us</Link></li>
          <li><Link to = "/Cart">Cart</Link></li>
          <li><Link to = "/Profile">Profile</Link></li>
          <button type='button' className='button-btn' onClick={
            ()=>{
              btnName ==='Login'?setBtnName('Logout'):setBtnName('Login');
            }
          }>{btnName}</button>
        </ul>
      </div>
    </div>
  )

}
export default Header;