import "../stylesheets/footer.css";
import Infos from "./footer/Infos";
import Subscribe from "./footer/Subscribe";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const Footer = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <footer>
      <Subscribe />
      <div className="details">
        <Infos />
      </div>
      <p className="copyrights">
        Copyright &copy; 2020 |{" "}
        <span>
          <span>ServicePro</span>
        </span>
        <span
          className="to-top"
          onClick={() => dispatch({ type: "TO_TOP", elem: "#home" })}
        >
          <i className=" angle double up big icon"></i>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
