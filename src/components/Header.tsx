import logo from "../assets/logoBarber.png";

const Header = () => {
  return (
    <header className="text-base py-2 px-4 flex justify-center">
      <div className="container flex justify-between items-center md:max-w-6xl">
        <div className="flex">
          <div className="w-24">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="hidden md:block font-bold">
          <ul className="flex justify-between items-center h-10">
            <li className="w-28 text-center">
              <a
                href="#intro"
                className="block w-28 px-4 py-2 rounded hover:bg-mainColor transition"
              >
                Início
              </a>
            </li>
            <li className="w-28 text-center">
              <a
                href="#horarios"
                className="block w-28 px-4 py-2 rounded hover:bg-mainColor transition"
              >
                Horários
              </a>
            </li>
            <li className="w-28 text-center">
              <a
                href="#servicos"
                className="block w-28 px-4 py-2 rounded hover:bg-mainColor transition"
              >
                Serviços
              </a>
            </li>
            <li className="w-28 text-center">
              <a
                href="#contato"
                className="block w-28 px-4 py-2 rounded hover:bg-mainColor transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col h-6 justify-between md:hidden">
          <div className="bg-darkGray h-1 w-8 rounded"></div>
          <div className="bg-darkGray h-1 w-8 rounded"></div>
          <div className="bg-darkGray h-1 w-8 rounded"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
