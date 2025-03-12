import { Link } from "@remix-run/react";
import Dropdown from "./Dropdown";
// state variable for the dropdown

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-white">
        Home
      </Link>
      <Dropdown />
    </div>
  );
};

export default Navbar;
