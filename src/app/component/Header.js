"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="cursor-pointer">Book Shelf</h1>
        </Link>
        {isAuthenticated ? (
          <p>Welcome, Seth</p>
        ) : (
          <div>
            <Link href="/auth/signin">
              <small>Signin</small>
            </Link>{" "}
            |{" "}
            <Link href="/auth/signup">
              <small>Signup</small>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
