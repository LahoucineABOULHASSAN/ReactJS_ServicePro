const NavSocial = () => {
  const date = new Date();
  return (
    <div id="top" className="nav-social">
      <ul className="to-left">
        <li className="date">
          <i className="calendar alternate outline icon"></i>{' '}
          {date.toDateString()}
        </li>
        <li className="phone-num">
          <i className="phone icon"></i> 080-080-0808
        </li>
      </ul>
      <ul className="to-right">
        <li>
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
            <i className="facebook f icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" rel="noreferrer" target="_blank">
            <i className="twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
            <i className="linkedin icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
            <i className="youtube icon"></i>
          </a>
        </li>
      </ul>
      <div className="clear"></div>
    </div>
  );
};

export default NavSocial;
