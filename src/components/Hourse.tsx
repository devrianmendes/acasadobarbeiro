import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg6.jpg";

const Hourse = () => {
  return (
    <section className="bg-mainColor p-10 relative">
      <div className="flex">
        <div className="m-1 flex flex-col items-end">
          <img className="blur-sm mb-1 w-9/12" src={bg1} alt="" />
          <img className="blur-sm mt-1 w-9/12" src={bg2} alt="" />
        </div>
        <div className="mr-1 flex justify-start items-center">
          <img className="blur-sm m-1 w-9/12" src={bg5} alt="" />
        </div>
      </div>
      <div className="text-darkWhite border-dotted border-4 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 mb-4 text-center uppercase">
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
