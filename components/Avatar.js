import Image from 'next/image';

const Avatar = ({ url }) => {
  return <Image width={40} height={40} layout="fixed" loading="lazy" className="rounded-full cursor-pointer" src={url} alt="profile pic" />;
};

export default Avatar;
