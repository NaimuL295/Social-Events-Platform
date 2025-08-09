

import { format } from 'date-fns';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router';



const ManageCard = ({manage,handleDelete}) => {

  const Dates = format(new Date(manage?.date), "MMM dd, yyyy 'at' h:mm a");
   
    return(
      <>     
<div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300   ">
  <figure>
    <img 
      src={manage?.thumbnail} 
      alt={manage?.title} 
      className="w-full h-48 object-cover"
    />
  </figure>
  <div className="card-body p-2">
    <div className="flex justify-between items-start">
      <h2 className="card-title text-lg">{manage?.title}</h2>
      <span className="text-base font-medium">{manage?.eventType}</span>
    </div>

    <div className="flex items-center ">
      <IoLocationOutline />
      <span className="ml-2 text-base">{manage?.location}</span>
    </div>

    <div className="flex items-center ">
      <MdOutlineDateRange />
      <span className="ml-2 text-base">{Dates}</span>
    </div>
<div>
  <p>  {manage?.description}</p></div>
    <div className="card-actions justify-end  space-x-2">
      <Link to={`/update/${manage._id}`}>
        <button className="btn  bg-green-600 text-white">Update</button>
      </Link>
      <div>
        <button 
        onClick={() => handleDelete(manage._id)} 
        className="btn bg-red-500 text-white "
      >
        Delete
      </button> 
      </div>
    </div>
  </div>



</div>

 



</>

    )
};

export default ManageCard;