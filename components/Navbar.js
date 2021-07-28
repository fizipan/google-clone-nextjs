import { DotsVerticalIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon, TagIcon } from '@heroicons/react/outline';
import { SunIcon } from '@heroicons/react/solid';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-evenly lg:justify-start lg:space-x-32  lg:ml-52">
      {/* Left */}
      <div className="flex space-x-8">
        <NavbarItem name="All" Icon={SearchIcon} active />
        <NavbarItem name="Images" Icon={PhotographIcon} />
        <NavbarItem name="Shop" Icon={TagIcon} />
        <NavbarItem name="Videos" Icon={PlayIcon} />
        <NavbarItem name="News" Icon={NewspaperIcon} />
        <NavbarItem name="More" Icon={DotsVerticalIcon} />
      </div>

      {/* Right */}
      <div>
        <SunIcon className="h-10 inline-flex sm:hidden rounded-full cursor-pointer text-[#3C4043] hover:bg-gray-100 p-2 mb-2" />
        <p className="hidden sm:inline-flex pt-2 pb-4 text-sm text-gray-500 cursor-pointer">Settings</p>
      </div>
    </nav>
  );
};

export default Navbar;
