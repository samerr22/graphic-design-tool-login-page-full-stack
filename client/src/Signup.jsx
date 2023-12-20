import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Singin() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        setError(true);
        return;
      }
      navigate("/sign-in");
      
    } catch (error) {
      setError(true);
    }
    
  };

  return (
    <div
      className="flex flex-col items-center  h-screen "
      style={{ backgroundColor: "#f6fafd" }}
    >
      <h1 className="mt-6 text-blue-700 font-semibold text-3xl">Stencil</h1>
      <h1 className="mt-5 text-gray-400 font-extralight text-2xl">
        Create a free account
      </h1>
      <p className=" hidden mt-2 text-gray-400 lg:block ml-3 ">
        Just enter yur name,email & password below, that's it!
      </p>
      <p className="hidden lg:block text-gray-600 mr-28 ">
        Create 10 free images every month
      </p>
      <p className="hidden lg:block lg:absolute mt-[144px] ml-[259px] text-gray-500">
        with this account
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h3
          htmlFor=""
          className="mt-4 text-gray-400  hidden  lg:block lg:ml-10  "
        >
          Full Name
        </h3>
        <input
          type="username"
          placeholder="User Name"
          id="username"
          onChange={handle}
          className=" w-[400px] mt-4 h-[45px] ml-8 shadow-sm rounded-md border-2 pl-3 focus:outline-none focus:ring-1 focus:ring-blue-400  transition-all duration-300 lg:mt-1"
        />
        <h3
          htmlFor=""
          className="mt-4 text-gray-400  hidden lg:block lg:ml-10 "
        >
          Email
        </h3>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handle}
          className=" w-[400px] mt-3 h-[45px] ml-8 shadow-sm rounded-md border-2 pl-3 focus:outline-none focus:ring-1 focus:ring-blue-400  transition-all duration-300 lg:w-[190px] lg:mt-1"
        />
        <h3
          htmlFor=""
          className=" text-gray-400  hidden lg:block lg:absolute lg:mt-[108px] lg:ml-[250px] "
        >
          Password
        </h3>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handle}
          className=" w-[400px] mt-3 h-[45px] ml-8 shadow-sm rounded-md border-2 pl-3 focus:outline-none focus:ring-1 focus:ring-blue-400  transition-all duration-300 lg:w-[190px] lg:absolute lg:mt-[134px] lg:ml-[240px]"
        />
        <button className="w-[400px] ml-8 h-[45px] mt-5 rounded-md bg-sky-600 hover:opacity-95 text-white lg:mt-20 lg:w-[150px] ">
          Sign up for free
        </button>
      </form>
      <p className="hidden lg:block w-[400px] text-slate-400 absolute mt-[356px] lg:ml-10">
        {" "}
        Minumum 8 characters; must have two of the following.lower case,
        upercase, numbers and symbols.
      </p>

      <h1 className="hidden lg:block lg:mt-[-37px] lg:ml-[-28px]">or</h1>
      <p className="mt-2 mr-48 font-extralight lg:hidden">
        {" "}
        Don't have an Account
      </p>
      <Link to="/sign-in">
      <button className=" absolute mt-[-23px] ml-[-10px] cursor-pointer hover:text-lg hover:text-indigo-300 text-gray-800 font-extralight lg:mt-[-25px] lg:ml-[-5px] lg:text-lg ">
        login
      </button>
      </Link>
      <p className="    text-red-500 ml-64 mt-[-24px]">{error && 'Something went wrong!'}</p>
    </div>
  );
}
