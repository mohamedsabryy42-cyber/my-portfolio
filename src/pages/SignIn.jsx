import { useState } from "react";

export default function Form () {
  const [form, setForm] = useState (
    {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      }
    }
  )
  


  const handleChange = (e) => {
    const {name, value} = e.target
    let error = ""
    if (name === "username") {
      if (value.length < 3) {
      error = "min 3 char"
    }
    else if (!/^[a-zA-Z0-9_ -]+$/.test(value)) {
      error = "No symbols allowed but these _ and space and -"
    }
    }
    if (value === "") {
      error = ""
    }
    else if (name === "password") {
      if (value.length < 6) {
      error = "Too Short"
    }
    else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(value)) {
  error = "Password must be at least 6 characters with at least one letter and one number"
}
    }
    setForm (prev => ({
  ...prev,
  [name]: value,
  errors: {
    ...prev.errors,
    [name]: error
  }}))
}
return (
<div className=" flex justify-center items-center min-h-screen bg-black">
      <div  className=" w-96">
     <h1 className="text-yellow-300 text-3xl mb-6 whitespace-nowrap truncate">
  {form.username && `Hi, ${form.username}`}
</h1>
      <form className="shadow-xl p-6 bg-gray-300">
        <div  className="flex items-center justify-center pb-2 text-red-400">
        <p className="block text-semibold text-3xl flex items-center font-semibold">Sign In</p>
        </div>
        <div className="flex gap-1">
          <div>
        <label className="text-semibold text-3xl block mt-8">Gender</label>
        <select 
        className=" p-4 border rounded focus:outline-none mb-3">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        </div>
        <div>
          <label  className="block mt-8 text-3xl pl-3">Year</label>
<input type="text" placeholder="" className="border rounded w-20 h-14 pl-5"/>
        </div>
                <div>
          <label  className="block mt-8 text-3xl">Month</label>
          <select className="border rounded p-4 mb-3 required" defaultValue="non">
            <option value="non" disabled>...</option>
            <option value="">January</option>
            <option value="">February</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>
          
        </div>
              <div>
        </div>
        </div>
        <input
        name="username"
        value={form.username}
        onChange={handleChange}
          type="text"
          placeholder="Username"
          
          className={`form.errors.username === "" ? focus:ring-2 focus:ring-gray-400 : focus:ring-amber-300  w-full border rounded p-2 outline-none mb-2`}
        />
        {form.errors.username}
        
          <input
          name="password"
          type="password"
          onChange={handleChange}
          value={form.password}
            placeholder="Password"
            className="w-full border rounded p-2 focus:ring-2 ring-yellow-300 outline-none mt-4"
            />
            {form.errors.password}
          <input type="password" placeholder="Confirm Password" className="w-full border rounded p-2 focus:ring-2 ring-yellow-300 outline-none mt-4"/>

        <button
        
          className="cursor-pointer border rounded w-full mt-4 bg-blue-500 hover:bg-blue-400 p-2 text-white"
        >
          Sign In
        </button>
      </form>
      </div>
    </div>
  );
}