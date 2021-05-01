const Service = ({ service }) => {
  return (
    <figure className="service">
      <img src={service.image} alt="service" />
      <div className="service-info">
        <h4>{service.title}</h4>
        <p>{service.desc}</p>
        <button className="button">Read More</button>
      </div>
    </figure>
  );
};

export default Service;
