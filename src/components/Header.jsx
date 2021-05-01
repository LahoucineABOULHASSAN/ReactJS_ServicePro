import '../stylesheets/header.css';
const Header = () => {
  return (
    <header id="home">
      <div id="landing-header">
        <div className="header">
          <h1>PROFESSIONAL</h1>
          <h1>SERVICES</h1>
          <h1>FOR YOU</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            eveniet.
          </p>
          <a href="#our-services" className="btn btn-primary">
            About us
          </a>
          <a href="#our-services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
