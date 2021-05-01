const Subscribe = () => {
  return (
    <div id="subscribe" className="subscribe">
      <form>
        <label htmlFor="email">Subscribe</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail Address"
          required
        />
        <input type="submit" value="Subscribe" />
      </form>
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
    </div>
  );
};

export default Subscribe;
