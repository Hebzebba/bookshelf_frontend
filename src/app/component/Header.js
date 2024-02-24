import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="cursor-pointer">Lecture Notes</h1>
        </Link>
        <p>Welcome, Seth</p>
      </div>
    </header>
  );
};

export default Header;
