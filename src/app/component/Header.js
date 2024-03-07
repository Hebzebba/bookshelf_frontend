"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem("user_info")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_info");
    window.location.reload();
  };

  const Profile = () => {
    if (info) {
      if (info.role === "Lecturer") {
        return (
          <div>
            <span>Hello, {info.username}</span> {" | "}
            <div className="dropdown">
              <span>Studio</span>
              <div className="dropdown-content">
                <Link href="/dashboard">
                  <small>Dashboard</small>
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        );
      } else if (info.role === "Admin") {
        return (
          <div>
            <span>Hello, {info.username}</span> {" | "}
            <div className="dropdown">
              <span>Studio</span>
              <div className="dropdown-content">
                <Link href="/dashboard">
                  <small>Dashboard</small>
                </Link>
                <Link href="/admin/dashboard/home">
                  <small>Manage</small>
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex items-center justify-center">
            <p>
              Welcome, {info.username}
              {" | "}
              <button onClick={handleLogout}>Logout</button>
            </p>
          </div>
        );
      }
    } else {
      return (
        <div>
          <Link href="/auth/signup">
            <span>Signup</span>
          </Link>{" "}
          |{" "}
          <div className="dropdown">
            <span>Login</span>
            <div className="dropdown-content">
              <Link href="/auth/signin">
                <small>Student</small>
              </Link>
              <Link href="/auth/lecturer">
                <small>Lecturer</small>
              </Link>
              <Link href="/admin/signin">
                <small>Admin</small>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="cursor-pointer">Slides Share</h1>
        </Link>
        {<Profile />}
      </div>
    </header>
  );
};

export default Header;
