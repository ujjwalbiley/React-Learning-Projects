import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center gap-3 lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    'block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    'block py-2 pr-4  pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700'
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({isActive}) =>
                    'block py-2 pr-4  pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700'
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Github"
                  className={({isActive}) =>
                    'block py-2 pr-4  pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700'
                  }
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
