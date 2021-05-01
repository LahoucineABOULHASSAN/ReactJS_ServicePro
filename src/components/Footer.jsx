import '../stylesheets/footer.css';
import Infos from './footer/Infos';
import Subscribe from './footer/Subscribe';
const Footer = () => {
  return (
    <footer>
      <Subscribe />
      <div className="details">
        <Infos />
      </div>
      <p className="copyrights">
        Copyright &copy; 2020 |{' '}
        <span>
          <span>ServicePro</span>
        </span>
        <a href="#top" className="to-top">
          <i className=" angle double up big icon"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
