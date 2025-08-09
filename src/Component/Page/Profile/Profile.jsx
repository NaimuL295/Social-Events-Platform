import React, { use } from "react";

import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
       const {user}=use(AuthContext)
       console.log(user);
       
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-lg shadow-md text-center">
      <img
        src={user?.photoURL
}
        alt="Profile"
         className="w-12 h-12 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-2xl text-black font-semibold mb-2">{user?.
displayName}</h2>
      <p className="text-gray-600 mb-4">{user?.email}</p>
    </div>
  );
};

export default Profile;
