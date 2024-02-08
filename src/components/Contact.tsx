import contactBarber from "../assets/contactBarber.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyARAmjt54jpaO_-NCYz21HWEA002ue9S3s",
  });

  const shop = "ChIJebY-kJh8mQARjRL5wRPl8EU";
  const key = "AIzaSyARAmjt54jpaO_-NCYz21HWEA002ue9S3s";

  useEffect(() => {
    const getComments = async () => {
      const comments = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=[${shop}]&key=[${key}]`
      );
      const obj = comments.json();
      console.log(obj);
    };

    getComments();
  }, []);

  // const img1Ref = useRef<HTMLDivElement | null>(null);
  // const img2Ref = useRef<HTMLDivElement | null>(null);
  // const [imgHeight, setImgHeight] = useState<number | null>(null);

  // useEffect(() => {
  //   function handleResize() {
  //     console.log('oi')
  //     if (img1Ref.current) {
  //       setImgHeight(img1Ref.current.clientHeight);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Chamada inicial para garantir que o tamanho seja registrado

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const a = "432,480,864"
  const position = { lat: -22.901622, lng: -43.178978 };
  return (
    <section className="flex justify-center py-14 px-6 bg-darkGray text-darkWhite">
      <div className="w-full max-w-sm md:max-w-6xl md:flex md:justify-center">
        <div className="w-72 md:w-3/6 relative hidden lg:block">
          <div
            // id="img1"
            // ref={img1Ref}
            className="-translate-x-5 -translate-y-5 relative z-10 shadow-[20px_20px_0_0_rgba(69,26,3,1)] mr-2"
          >
            <img src={contactBarber} alt="Imagem decorativa de um barbeiro" />
          </div>
          {/* <div
            ref={img2Ref}
            id="img2"
            style={{ height: imgHeight ? `${imgHeight}px` : "auto" }}
            className="bg-darkYellow h- w-full sm:w-80 lg:w-6/12 absolute right-0 top-0 -translate-x-2 -translate-y-2"
          ></div> */}
        </div>
        <div className="md:w-3/6 lg:ml-2">
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
