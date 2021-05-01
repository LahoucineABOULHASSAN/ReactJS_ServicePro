import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavBarItem = ({ item }) => {
  const { dispatch } = useContext(ThemeContext);
  const activeClass = item.value === 'home' ? 'nav-item active' : 'nav-item';
  return (
    <li className={activeClass}>
      <a
        href={item.link}
        onClick={(event) => dispatch({ type: 'IS_ACTIVE', event })}
      >
        {item.value}
      </a>
    </li>
  );
};

export default NavBarItem;
