import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

// ..

const Hourse = () => {

  return (
    <section id="horarios" className="bg-mainColor flex justify-center w-full p-4 relative">
      <div className="max-w-sm sm:max-w-xl lg:max-w-7xl sm:p-10 flex items-center justify-center">
        <div className="m-1 flex flex-col sm:items-end">
          <img className="blur-sm mb-1 sm:w-12/12" src={bg1} alt="Imagem decorativa de um barbeiro" />
          <img className="blur-sm mt-1 sm:w-12/12" src={bg2} alt="Imagem decorativa de um barbeiro" />
        </div>
        <div className="hidden mr-1 sm:flex justify-start items-center">
          <img className="blur-sm m-1 w-12/12" src={bg3} alt="Imagem decorativa de um barbeiro" />
        </div>
      </div>
      <div className="max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div data-aos="fade-right" className="text-darkWhite p-10 mb-10 text-center uppercase border-dotted border-4 rounded-xl">
          <h2 className="text-darkWhite font-titleFont text-2xl pb-4">
            Horário de funcionamento
          </h2>
          <ul className="font-semibold">
            <li>Domingo - Fechado</li>
            <li>Segunda - 09 às 17</li>
            <li>Terça - 09 às 17</li>
            <li>Quarta - 09 às 17</li>
            <li>Quinta - 09 às 17</li>
            <li>Sexta - 09 às 17</li>
            <li>Sábado - 09 às 17</li>
          </ul>
        </div>
        <div data-aos="fade-left" className="hidden lg:block text-darkWhite">
          <p className="font-bold mb-4">
            Nosso ambiente foi montado priorizando o conforto e qualidade de
            atendimento:
          </p>
          <ul>
            <li>✓ Ambiente sempre acolhedor</li>
            <li>✓ Nossos profissionais prezam por qualidade</li>
            <li>✓ Valorizamos o tempo e o dinheiro dos nossos clientes</li>
            <li>✓ Trabalhamos com produtos de alta qualidade</li>
            <li>
              ✓ Todos os equipamentos são desinfetados antes e depois do uso
            </li>
          </ul>
        </div>
      </div>
    </section>
    // <section className=" bg-manCuttingHair py-14 px-yyar6 flex justify-center w-full h-auto bg-center bg-no-repeat">
    /* <div className="max-w-sm relative bg-darkYellow">
        <div className="relative z-10">
          <div className="bg-darkWhite rounded-lg p-10 mb-4 text-center uppercase">
            <h2 className="text-mainColor font-titleFont text-2xl pb-4">Horário de funcionamento</h2>
            <ul>
              <li>Domingo - Fechado</li>
              <li>Segunda - 09 às 17</li>
              <li>Terça - 09 às 17</li>
              <li>Quarta - 09 às 17</li>
              <li>Quinta - 09 às 17</li>
              <li>Sexta - 09 às 17</li>
              <li>Sábado - 09 às 17</li>
            </ul>
          </div>
          <div className="text-darkWhite">
            <p className="font-bold mb-4">
              Nosso ambiente foi montado priorizando o conforto e qualidade de
              atendimento:
            </p>
            <ul>
              <li>✓ Ambiente sempre acolhedor</li>
              <li>✓ Nossos profissionais prezam por qualidade</li>
              <li>✓ Valorizamos o tempo e o dinheiro dos nossos clientes</li>
              <li>✓ Trabalhamos com produtos de alta qualidade</li>
              <li>
              ✓ Todos os equipamentos são desinfetados antes e depois do uso
              </li>
            </ul>
          </div>
        </div>
      </div> */

    // </section>
  );
};

export default Hourse;
