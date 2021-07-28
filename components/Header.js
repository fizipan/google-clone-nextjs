import Avatar from './Avatar';

import { ViewGridIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="flex w-full justify-between p-5 text-sm text-gray-700">
      {/* Left */}
      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Gambar</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 p-2 hover:bg-gray-100 rounded-full cursor-pointer" />

        {/* Avatar */}
        <Avatar url="https://coaching.papareact.com/ai9" />
      </div>
    </header>
  );
};

export default Header;
