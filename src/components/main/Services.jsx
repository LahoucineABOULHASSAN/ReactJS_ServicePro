import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../contexts/ServicesContext";
import Service from "./Service";
import Error from "../Error.jsx";
import Loading from "../Loading.jsx";
import Axios from "axios";
import "../../stylesheets/service.css";

const Services = () => {
  const { services, setServices } = useContext(ServicesContext);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/services.json";
    const fetchData = async () => {
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setServices(res.data);
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setError(error);
      }
    };
    fetchData(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {services.length ? (
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
      ) : (
        !error && <Loading error={error} />
      )}
      {error && <Error error={error} />}
    </>
  );
};

export default Services;
