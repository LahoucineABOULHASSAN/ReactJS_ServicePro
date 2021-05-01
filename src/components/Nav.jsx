import '../stylesheets/nav.css';
import NavBar from './nav/NavBar';
import NavSocial from './nav/NavSocial';
const Nav = () => {
  return (
    <nav>
      <NavSocial />
      <div className="topnav" id="myTopnav">
        <div className="logo to-left">ServicePro</div>
        <NavBar />
        <div className="clear"></div>
      </div>
    </nav>
  );
};

export default Nav;
