import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react"; // Icon for menu toggle

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen bg-gray-800 text-white w-80 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        } md:translate-x-0 md:relative md:w-64`}
      >
        {/* <div className="p-4 text-xl font-bold">Sidebar</div> */}
        {/* user status */}
        <div className="p-4 flex items-center">
          <img
            src="https://randomuser.me/api"
            alt="User"
            className="border border-red-500 w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-sm">Admin</p>
          </div>
        </div>
        <nav className="space-y-2 p-4">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Expenses
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Settings
          </Link>
        </nav>

        {/* sidebar footer */}
        <div className="fixed bottom-0 w-80 md:relative md:w-64 p-4 text-center">
          <p className="text-xs">&copy; 2021 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
