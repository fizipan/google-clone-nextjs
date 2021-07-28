import { MicrophoneIcon, SearchIcon, SunIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Avatar from './Avatar';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const HeaderSearch = () => {
  const router = useRouter();
  const searchInput = useRef(null);

  // check if query is filled add to search input
  useEffect(() => {
    if (!router.query.term) {
      return;
    }
    searchInput.current.value = router.query.term;
  }, [router.query.term]);

  // Push search text to route
  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;

    if (!term) {
      return;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white border-b overflow-x-hidden">
      {/* Left */}
      <div className="flex w-full p-6 items-center">
        {/* Image */}
        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="cursor-pointer" onClick={() => router.push('/')} width={120} height={40} alt="" />

        {/* Input */}
        <form onSubmit={search} className="flex flex-grow max-w-3xl items-center border border-gray-200 rounded-full py-3 px-6 ml-10 mr-5 shadow-md focus-within:shadow-lg hover:shadow-lg">
          <input type="text" ref={searchInput} className="flex-grow w-full focus:outline-none" />

          <XIcon className="h-7 sm:mr-3 transition duration-100 transform hover:scale-125 border-gray-200 cursor-pointer text-gray-500" onClick={() => (searchInput.current.value = '')} />

          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300 text-[#4285F4] cursor-pointer" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-[#4285F4] cursor-pointer" onClick={search} />
          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>
        <div className="flex space-x-4 items-center ml-auto">
          <SunIcon className="h-10 hidden sm:inline-flex rounded-full cursor-pointer text-[#3C4043] hover:bg-gray-100 p-2" />
          <CogIcon className="h-10 hidden sm:inline-flex rounded-full cursor-pointer text-[#3C4043] hover:bg-gray-100 p-2" />
          <ViewGridIcon className="h-10 hidden sm:inline-flex rounded-full cursor-pointer text-[#3C4043] hover:bg-gray-100 p-2" />
          <Avatar url="https://coaching.papareact.com/ai9" />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default HeaderSearch;
