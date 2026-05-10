"use client";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Menu */}
        <div className="flex items-center gap-8 text-[15px] font-medium">
          <Link
            href="/"
            className="text-sky-500 border-b-2 border-sky-500 pb-1"
          >
            Home
          </Link>

          <Link href="/destinations" className="hover:text-sky-500">
            Destinations
          </Link>

          <Link href="/bookings" className="hover:text-sky-500">
            My Bookings
          </Link>

          <Link href="/add-destination" className="hover:text-sky-500">
            Add Destination
          </Link>
        </div>

        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold text-sky-500">Wanderlast</h1>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-6 text-[15px] font-medium">
          <Link
            href="/profile"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaRegUser />
            Profile
          </Link>

          <Link href="/login" className="hover:text-sky-500">
            Login
          </Link>

          <Link href="/signup" className="hover:text-sky-500">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
