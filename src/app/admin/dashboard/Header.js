"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="header">
      <Link href="/admin/dashboard/home">
        <p
          className={pathname.includes("admin/dashboard/home") ? "active" : ""}
        >
          Dashboard
        </p>
      </Link>
      <Link href="/admin/dashboard/create">
        <p
          className={
            pathname.includes("admin/dashboard/create") ? "active" : ""
          }
        >
          Create
        </p>
      </Link>
    </div>
  );
};

export default Header;
