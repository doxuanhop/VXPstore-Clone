import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-[1512px] mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://vxpstore.xtgem.com/images/logo.png"
            alt="VXPstore Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">VXPstore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Trang chủ
          </Link>
          <a
            href="https://vxpstore.xtgem.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Website
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
