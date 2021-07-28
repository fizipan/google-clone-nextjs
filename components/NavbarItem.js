import PropTypes from 'prop-types';

const NavbarItem = ({ name, active, Icon }) => {
  return (
    <div className={`flex space-x-1 text-sm cursor-pointer hover:text-[#4285F4] hover:border-b-4 pt-2 pb-3 border-[#4285F4] ${active ? 'active' : 'text-gray-500'}`}>
      <Icon className="h-5" />
      <p className="hidden sm:inline-flex">{name}</p>
    </div>
  );
};

NavbarItem.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
};

export default NavbarItem;
