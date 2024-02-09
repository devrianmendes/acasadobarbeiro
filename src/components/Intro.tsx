import intro1 from "../assets/imagem-intro-a-casa-do-barbeiro.jpg";
import beard from "../assets/icone-barba.png";
import kid from "../assets/icone-crianca.png";
import machine from "../assets/icone-maquina.png";
import scissor from "../assets/icone-tesoura.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="intro" className="py-10 px-6">
      <div className="flex flex-col">
        <div className="flex justify-center mb-10">
          <div className="max-w-sm md:max-w-6xl md:flex">
            <div
              data-aos="fade-right"
              className="pb-4 md:w-6/12 flex flex-col justify-center"
            >
              <div className="pb-4 md:text-xl">
                <div className="my-3">
                  <p className="mb-10">Bem-vindos</p>
                </div>
                <div className="mb-10">
                  <h1 className="uppercase font-titleFont my-3 text-2xl md:text-4xl">
                    A casa do barbeiro
                  </h1>
                  <p>
                    A <h2 className="inline">Barbearia</h2> especializada no
                    bem-estar masculino
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <FaMapMarkerAlt />
                  <address>Rua Fictícia, 130, Centro, RJ</address>
                </div>
                <div className="flex items-center my-3">
                  <BsFillTelephoneFill />
                  <p>(21)2222-2222</p>
                </div>
                <div className="flex items-center my-3">
                  <FaWhatsapp />
                  <p>(21)99999-9999</p>
                </div>
                <button className="font-bold max-w-72 border-2 rounded-lg py-3 px-5 uppercase flex items-center justify-center hover:bg-mainColor hover:border-mainColor  hover:text-darkWhite ease-in duration-100">
                  <FaWhatsapp className="mr-2" />
                  Agende um horário
                </button>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="md:w-6/12">
              <figure className="pb-6">
                <img
                  src={intro1}
                  className="rounded-lg"
                  alt="Foto de um modelo masculino com cabelo e barba feitos."
                />
                <figcaption>"Foto de um modelo masculino com cabelo e barba feitos"</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm md:max-w-6xl grid grid-cols-2 md:grid-cols-4 font-bold text-2xl text-center">
            <div className="flex flex-col items-center p-4 rounded-md hover:shadow-lg ">
              <img className="w-20" src={beard} alt="Ícone de uma barba" />
              <p>Cuidados faciais</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-md hover:shadow-lg ">
              <img className="w-20" src={scissor} alt="Ícone de uma tesoura" />
              <p>Corte de cabelo</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-md hover:shadow-lg ">
              <img
                className="w-20"
                src={machine}
                alt="Ícone de uma máquina de cortar cabelo"
              />
              <p>Barba</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-md hover:shadow-lg ">
              <img className="w-20" src={kid} alt="Ícone de uma criança" />
              <p>Corte de cabelo infantil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
