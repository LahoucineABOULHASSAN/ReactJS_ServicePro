import "../../stylesheets/work.css";
const Work = () => {
  const works = [
    { item: "Work Hours", value: 500 },
    { item: "Great Reviews", value: 500 },
    { item: "Projects Done", value: 500 },
    { item: "Awards Won", value: 500 },
  ];
  return (
    <section id="work" className=" work grid">
      <div>
        <h2>
          Our slutions for your <br />
          <span>business growth</span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          officia aspernatur, quae non tempore sed vel quaerat quas error
          voluptatem!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
        <button className="button">read more</button>
      </div>
      <ul id="nbrs" className="grid">
        {works.map((work) => (
          <li key={work.item}>
            <span className="nbr">{work.value}</span>
            <p>{work.item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;
