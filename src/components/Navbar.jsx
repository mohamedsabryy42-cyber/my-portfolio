import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [menu, setMenu] = useState (false)
  function menuAppearance () {

  }
  return (
    <div className="flex bg-gray-700 p-4 w-full fixed top-0 left-0 z-50">

      <div className="text-white font-bold">My Project</div>
      <div className="flex flex-1 justify-center items-center gap-4 ">
        <Link to="/" className="text-red-400 hover:text-red-300 border rounded-full hover:bg-white w-15 flex justify-center">Home</Link>
        <Link to="/product" className="text-red-400 hover:text-red-300 border rounded-full hover:bg-white w-20 flex justify-center">Product</Link>
      </div>
          <Link to="/signin" className="bg-green-400 border rounded-full hover:bg-white w-20 flex justify-center item ">Sign In</Link>
      <button
      className="bg-amber-200 md:hidden"
      onClick={() => setMenu(!menu)}>
        <BiMenu className="w-6 h-14 rounded-full"/>
        </button>
         {menu && (<div className="border rounded-full min-h-screen">
            <p>alhamdllah</p>
          </div>
        )}
        </div>
  );
}
