import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logo-a-casa-do-barbeiro.png";

const Footer = () => {
  return (
    <footer className="flex justify-center p-6 bg-darkWhite">
      <div className="w-full max-w-sm md:flex md:justify-between md:max-w-6xl">
        <div className="flex justify-center pb-6 md:mx-2">
          <a href="link">
            <img
              className="w-36 md:w-28"
              src={logo}
              alt="Logo de a casa do barbeiro"
            />
          </a>
        </div>
        <div className="mb-4 md:mx-2">
          <h3 className="font-titleFont text-xl lg:text-2xl">Contato</h3>
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
        <div className="mb-4 md:mx-2">
          <h3 className="font-titleFont text-lg lg:text-2xl">Institucional</h3>
          <a href="link" className="hover:text-mainColor">
            <p>Home</p>
          </a>
          <a href="link" className="hover:text-mainColor">
            <p>Nossos serviços</p>
          </a>
          <a href="link" className="hover:text-mainColor">
            <p>Galeria</p>
          </a>
        </div>
        <div className="hidden lg:block">
          <h3 className="font-titleFont text-lg lg:text-2xl">
            Nossas especialidades
          </h3>
          <ul className="list-disc list-inside">
            <li>Cabelo masculino</li>
            <li>Barba</li>
            <li>Tratamentos capilares</li>
            <li>Degradê</li>
            <li>Cerveja gelada</li>
          </ul>
        </div>
        <div className="md:mx-2">
          <h3 className="font-titleFont text-lg lg:text-2xl">Nossas redes</h3>
          <div className="flex">
            <div className="flex md:w-4/12">
              <a
                href="link"
                className="p-1 rounded  hover:bg-mainColor transition"
              >
                <FaSquareFacebook size={25} />
              </a>
            </div>
            <div className="flex md:w-4/12">
              <a
                href="link"
                className="p-1 rounded hover:bg-mainColor transition"
              >
                <FaInstagram size={25} />
              </a>
            </div>
            <div className="flex md:w-4/12">
              <a
                href="link"
                className="p-1 rounded  hover:bg-mainColor transition"
              >
                <FaYoutube size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
