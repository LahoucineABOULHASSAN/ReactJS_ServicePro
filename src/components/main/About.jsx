import '../../stylesheets/about.css';
const About = () => {
  return (
    <>
      <section id="about-us" className="about grid">
        <img
          src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt="About us"
        />
        <div className="about-div">
          <h2>
            Get to know about
            <span> our company</span>
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            officia aspernatur, quae non tempore sed.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
          <button className="button">read more</button>
        </div>
      </section>
      <section className="about-section">
        <div className="about-title">
          <h1>
            What they say <span> about us</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="about-us grid">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="avatar"
            />
            <h3>John Doe</h3>
            <span>Profession</span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque aut odit expedita soluta quis nobis"
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517499610481-9bc77847c8b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="avatar"
            />
            <h3>Jane Doe</h3>
            <span>Profession</span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque aut odit expedita soluta quis nobis"
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
