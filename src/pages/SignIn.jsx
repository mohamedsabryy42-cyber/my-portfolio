import { useState } from "react";



export default function SignIn () {
  const [username, setUsername] = useState("");
  const [usernameValidation, setUsernameValidation] = useState("");
  const validation = /^[a-z0-9_- ]{3,}$/i;

  function usernameFunction (e) {
    setUsername (e.target.value)
    if (validation.test(username))
  {
    setUsernameValidation(<p  className="text-green-400">Valid Username</p>)
  }
  if (!validation.test(username)) {
    setUsernameValidation(<p  className="text-red-400">Invalid Username, it must contain, atleast 3 char, not including all symbols but these $-_</p>)
  }
  if (e.target.value === "") {
    setUsernameValidation("")
  }
  }
  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div  className=" w-96">
     <h1 className="text-yellow-300 text-3xl mb-6 whitespace-nowrap truncate">
  {username && `Hi, ${username} 😃`}
</h1>

      <form className="shadow-xl p-6 bg-gray-300">

        <label className="text-3xl font-bold text-gray-800 flex mb-6 justify-center item-center">
          Create Account
        </label>

        <label className="block text-semibold text-3xl">Username</label>
        <input
        onChange={usernameFunction}
        value={username}
          type="text"
          placeholder="Username"
          className="w-full border rounded p-2 focus:ring-2 ring-blue-400 outline-none mb-2"
        />
        {usernameValidation}

        <label className="block text-semibold text-3xl">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-2 focus:ring-2 ring-blue-400 outline-none mb-2"
        />
        
        <label className="block text-3xl">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 w-full border rounded focus:ring-2 ring-blue-400 outline-none"
        />

        <label className="text-semibold text-3xl block mt-8">Gender</label>
        <select className="w-full p-4 border rounded focus:outline-none">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
        
          className=" cursor-pointer border rounded w-full mt-4 bg-blue-500 hover:bg-blue-400 p-2 text-white"
        >
          Sign In
        </button>
      </form>
      </div>
    </div>
  );
}
