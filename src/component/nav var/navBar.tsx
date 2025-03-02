import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide">Logo</div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-lg">
            <li>
              <NavLink
                to="/"
                className="px-4 py-2 rounded-md hover:text-gray-300 transition-all"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post"
                className="px-4 py-2 rounded-md hover:text-gray-300 transition-all"
              >
                Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
