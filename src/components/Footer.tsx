import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logoBarber.png";

const Footer = () => {
  return (
    <footer className="p-6 bg-darkWhite">
      <div>
        <div className="flex justify-center">
          <img className="w-40" src={logo} alt="Logo de a casa do barbeiro" />
        </div>
        <div className="mb-4">
          <h3>Contato</h3>
          <ul>
            <li className="flex items-center">
              <BsFillTelephoneFill /> (21)2222-2222
            </li>
            <li className="flex items-center">
              <FaWhatsapp />
              (21)99999-9999
            </li>
            <li className="flex items-center">
              <HiOutlineMail /> acasadobarbeiro@gmail.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt /> Rio de Janeiro, RJ
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3>Institucional</h3>
          <p>Home</p>
          <p>Nossos serviços</p>
          <p>Galeria</p>
        </div>
        <div>
          <h3>Nossas redes</h3>
          <div className="flex">
            <p>
              <FaSquareFacebook />
            </p>
            <p>
              <FaInstagram />
            </p>
            <p>
              <FaYoutube />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
