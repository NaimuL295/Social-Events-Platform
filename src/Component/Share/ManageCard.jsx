import { format } from 'date-fns';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router';

const ManageCard = ({ manage, handleDelete }) => {
  const Dates = format(new Date(manage?.date), "MMM dd, yyyy 'at' h:mm a");

  return (
    <div className="card w-80  rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 border border-yellow-500">
      {/* Thumbnail */}
      <figure className="rounded-t-xl overflow-hidden">
        <img
          src={manage?.thumbnail}
          alt={manage?.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4  rounded-b-xl">
        {/* Title & Type */}
        <div className="flex justify-between items-start flex-wrap">
          <h2 className="card-title text-lg font-bold ">{manage?.title}</h2>
          <span className="text-xs sm:text-sm font-semibold  px-2 py-1 rounded-full">
            {manage?.eventType}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center mt-2  text-sm sm:text-base">
          <IoLocationOutline className="" />
          <span className="ml-2">{manage?.location}</span>
        </div>

        {/* Date */}
        <div className="flex items-center mt-1  text-sm sm:text-base">
          <MdOutlineDateRange className="" />
          <span className="ml-2">{Dates}</span>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm">{manage?.description}</p>

        {/* Action Buttons */}
        <div className="card-actions justify-end space-x-2 mt-3">
          <Link to={`/update/${manage._id}`}>
            <button className="btn rounded-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-md hover:shadow-green-500/50 transition-all duration-300">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(manage._id)}
            className="btn rounded-full px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:shadow-red-500/50 transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCard;
