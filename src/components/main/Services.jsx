import { useContext, useEffect } from 'react';
import { ServicesContext } from '../../contexts/ServicesContext';
import Service from './Service';
import Axios from 'axios';
import '../../stylesheets/service.css';

const Services = () => {
  const { services, setServices } = useContext(ServicesContext);
  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/services.json';
    const fetchData = async () => {
      const res = await Axios.get(url);
      setServices(res.data);
    };
    fetchData(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div id="our-services" className="main-title">
        <h1>
          Financial <span>Services</span>
        </h1>
        <h5>
          Lorem ipsum dolor, consectetur adipisicing. Lorem ipsum dolor sit.
        </h5>
      </div>
      <section className="services grid">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </section>
    </>
  );
};

export default Services;
