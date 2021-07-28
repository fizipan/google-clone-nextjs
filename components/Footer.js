const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full">
      {/* Language */}
      <div className="py-3 px-8 border-b-2 border-gray-200">
        <p className="text-gray-500 text-sm">Indonesia</p>
      </div>

      {/* About */}
      <div className="flex flex-wrap space-y-7 sm:space-y-0 justify-center sm:justify-between px-8 py-4">
        {/* Left */}
        <div className="flex space-x-5">
          <p className="footer-link">About</p>
          <p className="footer-link">Advertising</p>
          <p className="footer-link">Business</p>
          <p className="footer-link">How Search Works</p>
        </div>
        {/* Right */}
        <div className="flex space-x-5">
          <p className="footer-link">Privacy</p>
          <p className="footer-link">Requirements</p>
          <p className="footer-link">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
