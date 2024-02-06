import logo from "../assets/logoBarber.png";

const Header = () => {
  return (
    <header className="py-2 px-4 flex justify-center">
      <div className="container flex justify-between items-center">
        <div className="flex">
          <div className="w-24">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between">
            <li className="mx-2"><a href="" className="p-4">Início</a></li>
            <li className="mx-2"><a href="" className="p-4">Nosso time</a></li>
            <li className="mx-2"><a href="" className="p-4">Galeria</a></li>
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
