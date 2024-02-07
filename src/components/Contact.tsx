import contactBarber from "../assets/contactBarber.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex justify-center py-14 px-6 bg-darkGray text-darkWhite">
      <div className="w-full max-w-sm md:max-w-6xl md:flex md:justify-center">
        <div className="w-72 sm:w-80 lg:w-6/12">
          <div className="-translate-x-6 -translate-y-14">
            <img src={contactBarber} alt="Imagem decorativa de um barbeiro" />
          </div>
        </div>
        <div className="lg:w-2/6">
          <h3 className="font-titleFont text-3xl text-center mb-4">
            Onde nos achar
          </h3>
          <ul className="mb-4">
            <li>Rua Fictícia, 130</li>
            <li>Centro, Rio de Janeiro</li>
            <li>Cep 22222-222</li>
            <li>Rio de Janeiro</li>
            <br />

            <p>(21)2222-2222</p>
          </ul>
          <p className="mb-2">Ou nos mande uma mensagem</p>
          <button className="border-2 rounded-lg py-3 px-5 uppercase flex items-center bg-mainColor border-mainColor text-darkWhite hover:scale-105 duration-100">
            <FaWhatsapp className="mr-2" />
            Fale conosco
          </button>
          <p>!!!!!!!!!!! inserir api do google maps em algum lugar aqui</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
