import React from "react";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/auth");
  };
  return (
    <nav className="navbar flex items-center justify-between px-6 py-3 bg-white shadow-md">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>

      <div className="flex gap-4">
        <Link to="/upload" className="primary-button w-fit p-4">
          Upload&nbsp;Resume
        </Link>

        {auth.isAuthenticated && (
          <button
            onClick={handleLogout}
            className="primary-button bg-red-500 hover:bg-red-600 text-white"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
