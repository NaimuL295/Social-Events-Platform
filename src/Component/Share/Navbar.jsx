

import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, NavLink } from "react-router";
import icon from"../../assets/icons8..png"

const Navbar = () => {
  const { user, logout } = use(AuthContext);
const handleLogout = () => {
    try {
      logout()
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-md px-8  mx-auto">

    <div className="md:hidden   dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li> 
          <ul className="p-2">
            <NavLink to="/" className="text-base font-bold ">
          Social Events
        </NavLink>

       <li> <NavLink to="/events" className="  btn  text-base">
          Upcoming Events
        </NavLink></li>
          </ul>
        </li>
       
      </ul>
    </div>

     <div className="flex-1   ">
     
   <img  className="max-sm:hidden  w-[60px] h-[45px] "src={icon} alt="" ></img>

    
        {/* <NavLink   to="/" className=" max-sm:hidden  text-2xl font-bold text-primary">
          Social Events
        </NavLink> */}
      </div>
      
     
      <div className="flex gap-4  ">
       
 <NavLink to="/" className="max-sm:hidden  btn btn-ghost text-base">
          Home
        </NavLink>
 <NavLink to="/comingEvent" className="max-sm:hidden  btn btn-ghost text-base">
          Upcoming Events
        </NavLink>

      <label className="swap swap-rotate">
  <input type="checkbox" className="theme-controller" value="dark" />
  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>     
        {!user ? <>
<ul className="flex gap-2">
 
         <li>   <Link to="/login" className="btn btn-primary">
            Login
      </Link> </li> 
<li>  <Link to="/register" className="btn   btn-primary">
           Register
          </Link> </li>
</ul>
        </> : <>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className=" btn-circle avatar tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="Profile" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded w-52 "
            >
              <li  ><NavLink className="text-base"  to="/createEvent">Create Event</NavLink></li>
              <li ><NavLink className="text-base"  to="/manageEvent">Manage Events</NavLink></li>
              <li><NavLink   className="text-base"  to="/joinEvent">Joined Events</NavLink></li>
              <li>
                <button className="btn text-base"  onClick={handleLogout} >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>}
      
      </div>
    </div>
  );
};

export default Navbar;
