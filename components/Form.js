import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useRef } from 'react';

const Form = () => {
  const searchInput = useRef(null);
  const router = useRouter();

  // Handle Search
  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;

    if (!term) return;

    // Push Url
    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-28 lg:mt-20 mx-8 mb-20">
      {/* Image */}
      <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="300" height="100" alt="" />

      {/* Input */}
      <div className="flex space-x-4 px-5 py-3 items-center rounded-full w-full max-w-md sm:max-w-xl lg:max-w-2xl border border-gray-200 mt-5 focus-within:shadow-lg hover:shadow-lg">
        <SearchIcon className="text-gray-500 h-5" />
        <input type="text" ref={searchInput} className="w-full focus:outline-none" />
        <MicrophoneIcon className="h-5" />
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 items-center md:space-x-4 mt-8">
        <button onClick={search} className="btn">
          Google search
        </button>
        <button onClick={search} className="btn">
          I&apos;m Feeling Lucky
        </button>
      </div>

      {/* Offer */}
      <div className="flex space-x-2 mt-8 text-sm">
        <p>Google offers:</p>
        <p className="text-[#1A0DAB] hover:underline cursor-pointer">English</p>
        <p className="text-[#1A0DAB] hover:underline cursor-pointer">Indonesian</p>
      </div>
    </form>
  );
};

export default Form;
