import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";


const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [newName, setNewName] = useState(user?.displayName || "");

  const handleSaveChanges = async () => {
    try {
      await updateUser({
        displayName: newName,
        photoURL: user.photoURL, 
      });
      setUser({
        ...user,
        displayName: newName,
      });
      toast.success("Profile updated successfully");
    } catch (err) {
      
      toast.error("Failed to update profile" ,err);
    }
  };
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-lg shadow-md text-center">
      <img
        src={user?.photoURL || "/default-avatar.png"}
        alt="Profile"
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        className="input input-bordered w-full mb-4"
        placeholder="Enter your new name"
      />

      <p className="mb-4 text-gray-600">{user?.email}</p>

      <button
        type="submit"
        onClick={handleSaveChanges}
        className="btn bg-green-600 text-white w-full"
      >
        Save Change
      </button>
      <ToastContainer />
    </div>
  );
};

export default Profile;
