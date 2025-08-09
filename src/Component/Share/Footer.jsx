import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import icon from"../../assets/icons8..png"
const Footer = () => {
  return (
    <footer className="  pt-8 pb-5">
      <div className=" lg:max-w-screen-2xl   md:container mx-auto px-6">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
          <div className="space-y-4">
            <div className="flex items-center">
           <img  className="  w-[60px] h-[45px] "src={icon} alt="" ></img>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
               ServeSync
              </h2>
            </div>
            <div className="flex space-x-3">
             <Link> <FaFacebook></FaFacebook>  </Link>
              <Link> <FaTwitter></FaTwitter></Link>
              <Link> <FaInstagram></FaInstagram></Link>
              <Link>  <FaLinkedin></FaLinkedin></Link>
            
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
             <li>    <Link className=" transition-colors duration-300"  >   
                  </Link></li>

<li> <Link to="/comingEvent" className=" transition-colors duration-300"
                  >
              Upcoming Events
                  </Link></li>
 <li> <Link to="/createEvent"  className=" transition-colors duration-300">Create Event  </Link></li> 
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
              
                <span>123 Community Street, Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center">
              
                <span>contact@communityconnect.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Stay Updated</h3>
            <p className=" mb-4">
              Subscribe to our newsletter for the latest events and updates.
            </p>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-1"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className=" text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CommunityConnect. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className=" text-sm">Privacy Policy</a>
            <a href="#" className=" text-sm">Terms of Service</a>
            <a href="#" className=" text-sm">Cookies</a>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div> */}
    </footer>
  );
};

export default Footer;