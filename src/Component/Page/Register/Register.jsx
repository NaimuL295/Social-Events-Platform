
import React, { use, useState } from 'react';
import { Link, useNavigate,   } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import UpLoadImg from '../../Hook/UpLoadImg';


const Register = () => {
const [uploadError, setUploadError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

 const navigate=useNavigate()
const {userCreate,googleSign,updateUser, setUser}=use(AuthContext)
const [isTrue,setTrue]=useState(false)
 const [preview, setPreview] = useState("");

   const handleFileChange = async (e) => {
    const file = e.target.files[0];
   ;
    
  if (!file) {
  setUploadError("Please select a file.");
  return;
}

    const uploadedUrl = await UpLoadImg(file)

    if (!updateUser) {
      return <p>  {updateUser} </p>
    }
    console.log("Uploaded Image URL:", uploadedUrl);
    setPreview(uploadedUrl)
  };

const handlerRegister= async(e)=>{
  e.preventDefault();
  const from=e.target;
  const fromData=new FormData(from);


  const {name ,email,password }=Object.fromEntries(fromData.entries())

  if (!email) return toast.error("Enter your Email");
  if (password.length < 6) return toast.error("Password must be at least 6 characters");
  if (!/[A-Z]/.test(password)) return toast.error("Must have an Uppercase letter");
  if (!/[a-z]/.test(password)) return toast.error("Must have a Lowercase letter");



  try {
    const result = await userCreate(email, password);

    const resUser = result.user;

    await updateUser({
      displayName: name,
      photoURL: preview
    });

    setUser({
      ...resUser,
      displayName: name,
      photoURL: preview
    });

    navigate("/");
  } catch (err) {
    
       if (err.code === "auth/email-already-in-use") {
        setFirebaseError("This email is already in use, please try logging in or use a different email.");
      } else if (err.code === "auth/invalid-email") {
        setFirebaseError("The email address is invalid.");
      } else if (err.code === "auth/weak-password") {
        setFirebaseError("The password is too weak. Please choose a stronger password.");
      } else {
        setFirebaseError("An unexpected error occurred. Please try again.");
      }
    toast.error("Registration failed");
  }
};

const handlerGoogle=()=>{
   setTimeout(() => {
   googleSign()
    navigate("/")
  },1000);
   
}
    return (  
        <div>
           <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-6">
      
        <form action=""  onSubmit={handlerRegister}      className="card-body  p-3" >
      <h1 className="text-4xl font-bold">Register now!</h1>
        <fieldset className="fieldset">
        <div className="col-span-full sm:col-span-3">
          <p className='text sm my-2 text-red-500 text-center '>{firebaseError}</p>
					<label htmlFor="" className="text-sm">Name</label>
					<input   name='name'  type="text" placeholder="Name" className=" my-2  input  w-full " />
				</div>
        <div className="col-span-full sm:col-span-3">
					<label htmlFor="" className="text-sm">Email</label>
					<input   name='email'  type="text" placeholder="Email" className=" my-2  input  w-full " />
				</div>
        <div className="col-span-full sm:col-span-3">
					 <label htmlFor="photo" className="text-sm">Photo</label>
      <input
        id="photo"
        name="photo"
        type="file"
        className="my-2 input w-full"
        onChange={handleFileChange}
      />
      <p className='text-red-500'>{uploadError}</p>
				</div>
         <div className="col-span-full sm:col-span-3 relative">
                  <label htmlFor="" className="text-sm">Password</label>
                  <input   name='password'  type={isTrue? "text" : "password" }   placeholder="Password" className=" my-2  input  w-full " />
                
            
                <button className="absolute z-50 right-2 bottom-4" type="button"  onClick={()=>setTrue(!isTrue) }>  {isTrue? <FaEye  size={20}/>:<FaEyeSlash size={20} />  }      </button>
                </div>
          <button  type='submit '  className="btn  bg-green-600 text-white text-center">Register</button>

        </fieldset> </form>
    <Link to="/login">   <p className=" text-center text-sm ">You have Already account ? <span className='text-amber-400'>	Login now</span>
		</p> </Link>	
		
 <ToastContainer></ToastContainer>
       <div>
      
<div className='py-1 w-8/12 mx-auto'>
      <button    onClick={handlerGoogle}   className="btn   w-full bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button> </div>     
      </div>
    </div>
        </div>   
        </div>
    );
}; 

export default Register