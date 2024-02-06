import intro1 from "../assets/intro1.jpg";
import beard from "../assets/beard.png";
import kid from "../assets/kid.png";
import machine from "../assets/machine.png";
import scissor from "../assets/scissor.png";
import { FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="container p-6">
      <div>
        <div className="pb-4">
          <div className="pb-4">
            <p>Bem-vindo</p>
            <h1 className="font-protest-strike text-xl">
              A CASA DO BARBEIRO
            </h1>
            <p>Rua Fictícia, 130</p>
            <p>Centro, Rio de Janeiro</p>
            <p>(21)2222-2222</p>
            <p>(21)99999-9999</p>
          </div>
          <button className="border-2 rounded-lg py-3 px-5 uppercase flex items-center hover:bg-mainColor hover:border-mainColor hover:text-darkWhite ease-in duration-100">
            <FaWhatsapp />
            Agende um horário
          </button>
        </div>
        <div>
          <div className="pb-6">
            <img
              src={intro1}
              className="rounded-lg"
              alt="Foto de um homem com cabelo e barba feitos"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 text-center">
          <div className="flex flex-col items-center pb-4">
            <img className="w-20" src={beard} alt="icon of a beard" />
            <p>Cuidados faciais</p>
          </div>
          <div className="flex flex-col items-center pb-4">
            <img className="w-20" src={scissor} alt="Ícone de uma tesoura" />
            <p>Corte de cabelo</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-20"
              src={machine}
              alt="Ícone de uma máquina de cortar cabelo"
            />
            <p>Barba</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src={kid} alt="Ícone de uma criança" />
            <p>Corte de cabelo infantil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
