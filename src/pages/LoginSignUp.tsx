// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {FaArrowRight} from "react-icons/fa6"
import logo from "../assets/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../Validation/ValidationSchema";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";

export default function LoginSignUp() {
  const [showIntro, setShowIntro]=useState(true)
  const [showContinue, setShowContinue]=useState(false)
  const navigate=useNavigate()
  const {register , formState:{errors} , handleSubmit}=useForm({resolver:yupResolver(loginSchema)})
  
  const onLogin=()=>{
    navigate("/dashboard")

  }
  const responseMessage = (response) => {
    const user=jwtDecode(response.credential)
    localStorage.setItem("user_name",user.given_name)
    navigate("/dashboard")
};
const errorMessage = (error) => {
    console.log(error);
    alert("Google Login Failed")
};

useEffect(()=>{
 
  setTimeout(()=>{setShowContinue(true)},2000)
},[])

  return (
    <div>
     {showIntro ? (
     <div className="flex justify-center items-center h-[80vh]">
      <div className="flex  flex-col gap-3">
        <p className="text-blue-700 text-xl font-bold">What makes it unique</p>
       
        <span>Technology stacks : React + Typescript + Tailwind</span>
        <span>Proper replication of the given web pages</span>
        <span>Fully Responsive Design</span>
        <span>Proper form validation (using React Hook Form + Yup)</span>
        <span>Reusable Components</span>
        <span>Google Authentication : Login , Logout , use of local storage</span>
        <span>Clean code</span>

        {showContinue ? <button className="fadeIn animate-bounce mt-3 p-3" onClick={()=>setShowIntro(false)}>Continue</button>
        : <p className="text-white">.</p>}
      </div>
      <div class="loader"></div>
      </div>):(
    <div className="flex justify-center items-center  ">
      <div className="w-full md:w-[40vw] flex flex-col gap-4">
        <p className="text-xl text-center flex justify-center items-center"><img src={logo} className="h-10 w-10" alt="Tidycal"/>TidyCal</p>
        <div className="flex flex-col px-4 border-2 border-slate-200 rounded-lg">
          <div>
            <p className="text-center text-slate-500 text-2xl border-slate-200">Login</p>
          </div>
          <form onSubmit={handleSubmit(onLogin)}>
          <div className="w-full flex flex-col ">
          
            <div className="flex flex-col">
              <strong>Your email :</strong>
              <input className="p-3" type="email" {...register("email")} />
             {errors.email ? <p className="error-msg">{errors.email.message}</p> : <p  className="text-white">.</p>}
            </div>
            <div className="flex flex-col">
            <strong>Your password :</strong>
              <input className="p-3" type="password" {...register("password")} />
              {errors.password ? <p className="error-msg">{errors.password?.message}</p> : <p  className="text-white">.</p>}
            </div>
           
            <div>
            <input type="checkbox"/>
            <span>Remember me</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button type="submit" className=" text-white formButton bg-blue-500 flex justify-center items-center py-4">Login <FaArrowRight size={27}/></button>
            <p className="text-center text-slate-400">Or</p>
            <div className="flex justify-center items-center">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </div>
            {/* <button onClick={()=>GoogleLogin()} className="formButton text-black flex justify-center items-center"><img src={googleLogo} className="image h-8 w-8" alt="google"/>Login with Google</button> */}
          </div>
          <div className="flex justify-between items-center text-blue-500 mt-2">
            <p> Forgot password</p>
            <p> No account ? Create</p>
          </div>
          </form>
        </div>
      </div>
    </div>)}
    </div>
  );
}
