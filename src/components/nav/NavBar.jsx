import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import NavBarItem from './NavBarItem';

const NavBar = () => {
  const { items, dispatch } = useContext(ThemeContext);
  return (
    <ul className="menu to-right">
      {items.map((item) => (
        <NavBarItem key={item.link} item={item} />
      ))}
      <li
        href="#"
        className="navBtn"
        onClick={() => dispatch({ type: 'DISPLAY_NAV' })}
      >
        <i className="bars icon responsive-btn"></i>
      </li>
    </ul>
  );
};

export default NavBar;
