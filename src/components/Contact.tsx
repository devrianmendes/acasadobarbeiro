import contactBarber from "../assets/imagem-contato-a-casa-do-barbeiro.webp";
import { FaWhatsapp } from "react-icons/fa";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyARAmjt54jpaO_-NCYz21HWEA002ue9S3s",
  });

  const position = { lat: -22.901622, lng: -43.178978 };
  return (
    <section
      id="contato"
      className="flex justify-center py-14 px-6 bg-darkGray text-darkWhite"
    >
      <div className="w-full max-w-sm md:max-w-6xl md:flex md:justify-center">
        <div
          data-aos="fade-right"
          className="w-72 md:w-6/12 relative hidden lg:block"
        >
          <div className="-translate-x-5 -translate-y-5 relative z-10  mr-2">
            <img src={contactBarber} alt="Imagem decorativa de um barbeiro" />
          </div>
        </div>
        <div data-aos="fade-left" className="md:w-6/12 lg:ml-2">
          <h3 className="font-titleFont text-3xl text-center mb-4">
            Onde nos achar
          </h3>
          <div className="w-full h-96 mb-6">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={position}
                zoom={15}
              >
                <Marker
                  position={position}
                  options={{
                    label: {
                      text: "A casa do barbeiro",
                      className: "map-marker",
                    },
                  }}
                />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
          <ul className="mb-4">
            <li>Rua Fictícia, 130</li>
            <li>Centro, Rio de Janeiro</li>
            <li>Cep 22222-222</li>
            <li>Rio de Janeiro</li>
            <p>(21)2222-2222</p>
          </ul>
          <p className="mb-2">Ou nos mande uma mensagem</p>
          <button className="border-2 rounded-lg py-3 px-5 uppercase flex items-center bg-mainColor border-mainColor text-darkWhite hover:scale-105 duration-100">
            <FaWhatsapp className="mr-2" />
            Fale conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
