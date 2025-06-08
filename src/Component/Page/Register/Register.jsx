import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
const {userCreate,googleSign}=use(AuthContext)
const [isTrue,setTrue]=useState(false)
const handlerRegister=(e)=>{
  e.preventDefault();
  const from=e.target;
  const fromData=new FormData(from);
  const {name ,email ,photo,password }=Object.fromEntries(fromData.entries())
console.log(name,email,photo,password);


userCreate(email,password).then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
  
});
}

const handlerGoogle=()=>{
  googleSign()
}
    return (  
        <div>
           <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-6">
      
        <form action=""  onSubmit={handlerRegister}      className="card-body" >
      <h1 className="text-5xl font-bold">Register now!</h1>
        <fieldset className="fieldset">
        <div className="col-span-full sm:col-span-3">
					<label htmlFor="" className="text-sm">Name</label>
					<input   name='name'  type="text" placeholder="Name" className=" my-2  input  w-full " />
				</div>
        <div className="col-span-full sm:col-span-3">
					<label htmlFor="" className="text-sm">Email</label>
					<input   name='email'  type="text" placeholder="Email" className=" my-2  input  w-full " />
				</div>
        <div className="col-span-full sm:col-span-3">
					<label htmlFor="" className="text-sm">photoURL </label>
					<input   name='photo'  type="text" placeholder="photoURL" className=" my-2  input  w-full " />
				</div>
         <div className="col-span-full sm:col-span-3 relative">
                  <label htmlFor="" className="text-sm">Password</label>
                  <input   name='password'  type={isTrue? "text" : "password" }   placeholder="Password" className=" my-2  input  w-full " />
                
            
                <button className="absolute  right-2 bottom-4" type="button"  onClick={()=>setTrue(!isTrue) }>  {isTrue? <FaEye  size={20}/>:<FaEyeSlash size={20} />  }      </button>
                </div>
          <button  type='submit '  className="btn   text-center">Register</button>

        </fieldset>  </form>
      <p className=" text-center  py-1">You have Already account 
		<Link to="/login"> Login now </Link>	
			</p>

 
       <div>
       

<div className='py-3 w-8/12 mx-auto'>
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

export default Register;