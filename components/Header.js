import Link from "next/link";

const Header = ({ isHome, isError }) => {
  if (isError) return "";
  
  return (
    <header className={`relative z-10 w-full px-4 ${isHome ? "" : "bg-gray-700"}`}>
      <div className="w-full h-hd flex justify-between items-end">
        <Link href="/">
          <a className="font-bold text-3xl text-gray-100 py-2 relative hover:text-white">MD Blog</a>
        </Link>
        <nav className="hidden sm:block">
          <ul>
            <li className="inline-block">
              <Link href="/posts">
                <a className="font-lg text-gray-200 px-10 py-2 border-b-2 transition-colors border-b-transparent inline-block hover:text-white hover:border-b-green-400">Posts</a>
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/About">
                <a className="font-lg text-gray-200 px-10 py-2 border-b-2 transition-colors border-b-transparent inline-block hover:text-white hover:border-b-green-400">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
