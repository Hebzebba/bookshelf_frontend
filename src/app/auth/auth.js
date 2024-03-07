"use client";

import { redirect } from "next/navigation";

export const authorize = (pathname) => {
  if (typeof window !== "undefined") {
    const user_info = JSON.parse(localStorage.getItem("user_info"));

    if (!user_info) {
      redirect("/auth/signin");
    } else {
      if (user_info.role === "Student") {
        if (pathname.includes("dashboard")) {
          redirect("/");
        }
      } else if (user_info.role === "Lecturer") {
        if (pathname.includes("admin")) {
          redirect("/");
        }
      }
    }
  }
};
