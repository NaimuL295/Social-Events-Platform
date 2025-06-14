

import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router';

// import Swal from 'sweetalert2';
// import axios from 'axios';

const ManageCard = ({manage}) => {
    console.log(manage);
  
//     const handleDelete=(id)=>{

// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//   axios.delete(`https://brash-celery-production.up.railway.app/event-delete/${id}`).then((result) => {
//           console.log(result.data);

// //     const remaining=mangoUser.filter(us=>us._id!==id);
// //  setMango(remaining)

//   Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });

//         }).catch((err) => {
//           console.log(err);
          
//         });

  
//   }
// });


   
//      }
    return(
      <>     
<div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
  <figure>
    <img 
      src={manage?.thumbnail} 
      alt={manage?.title} 
      className="w-full h-48 object-cover"
    />
  </figure>
  <div className="card-body">
    <div className="flex justify-between items-start">
      <h2 className="card-title text-lg">{manage?.title}</h2>
      <span className="text-base font-medium">{manage?.eventType}</span>
    </div>

    <div className="flex items-center mt-2">
      <IoLocationOutline />
      <span className="ml-2 text-base">{manage?.location}</span>
    </div>

    <div className="flex items-center mt-2">
      <MdOutlineDateRange />
      <span className="ml-2 text-base">{manage?.date}</span>
    </div>
<div>
  <p>  {manage?.description}</p></div>
    <div className="card-actions justify-end mt-4 space-x-2">
      <Link to={`/update/${manage._id}`}>
        <button className="btn">Update</button>
      </Link>
      <div>
        {/* <button 
        onClick={() => handleDelete(manage._id)} 
        className="btn "
      >
        Delete
      </button>  */}
      </div>
    </div>
  </div>



</div>

 



</>

    )
};

export default ManageCard;