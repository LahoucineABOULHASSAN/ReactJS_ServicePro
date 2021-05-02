import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const NavBarItem = ({ item }) => {
  const { dispatch } = useContext(ThemeContext);
  const activeClass = item.value === "home" ? "nav-item active" : "nav-item";
  return (
    <li className={activeClass}>
      <span
        onClick={(event) =>
          dispatch({ type: "IS_ACTIVE", event, elem: item.link })
        }
      >
        {item.value}
      </span>
    </li>
  );
};

export default NavBarItem;
