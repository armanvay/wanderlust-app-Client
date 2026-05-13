"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Avatar, Button, Spinner } from "@heroui/react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();


  const handleLogout =  async() => {
    await authClient.signOut();
  };

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

          <Link href="/mybooking" className="hover:text-sky-500">
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
          {isPending ? (
            <Spinner size="sm" />
          ) : session?.user ? (
            <>
              <Avatar>
                <Avatar.Image
                
                  alt={session?.user.name}
                  src={session?.user.image}
                />
                <Avatar.Fallback>{session?.user.name}</Avatar.Fallback>
              </Avatar>
              <Button
                variant="danger"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/singin" className="hover:text-sky-500">
                <Button>Login</Button>
              </Link>

              <Link href="/singup" className="hover:text-sky-500">
                <Button variant="secondary">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
