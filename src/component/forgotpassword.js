/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword(){
    const [userExits, setUserExits] = useState(false);

    async function forgotPassword(event){
      event.preventDefault();

      event.target[1]?.value && await fetch('http://localhost:4000/resetpassword',{
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        username: event.target[0].value,
        password: event.target[1].value,
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.user){
        window.location.href = "/";
        setUserExits(false);
      }
      return;
    })
    .catch(err => {
      console.log(err)
      return;
    })

    await fetch('http://localhost:4000/forgotpassword',{
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({
      username: event.target[0].value,
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.user){
        setUserExits(true);
      }
    })
    .catch(err => console.log(err)) 
  }

  return(
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">K-WD</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
            UI design on us!
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <Link to={'/register'} className="underline">Get started</Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Forgot Password?</h3>
          <form onSubmit={forgotPassword} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          { userExits &&  <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default ForgotPassword;