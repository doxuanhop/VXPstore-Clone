const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-auto">
      <div className="max-w-[1512px] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://vxpstore.xtgem.com/images/logo.png"
              alt="VXPstore Logo"
              className="h-6 w-auto"
            />
            <span className="text-sm text-gray-600">
              © {new Date().getFullYear()} VXPstore. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://vxpstore.xtgem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Website
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
