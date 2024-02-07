const Pricing = () => {
  return (
    <section className="py-14 px-6 bg-darkWhite text-center font-bold">
      <div className="max-w-sm mx-auto md:max-w-6xl">
        <h2 className="font-titleFont text-3xl">Nossos valores</h2>
        <div className="md:flex justify-around">
          <div className="md:mr-4 md:w-5/12">
            <ul>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor  border-dotted">
                <p>Corte pente único</p>
                <p className="text-mainColor">R$25</p>
              </li>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor  border-dotted">
                <p>Corte degradê</p>
                <p className="text-mainColor">R$35</p>
              </li>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor  border-dotted">
                <p>Aparo de barba</p>
                <p className="text-mainColor">R$35</p>
              </li>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor  border-dotted">
                <p>Design de barba</p>
                <p className="text-mainColor">R$50</p>
              </li>
            </ul>
          </div>
          <div className="md:ml-4 md:w-5/12">
            <ul>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor  border-dotted">
                <p>Barba completa</p>
                <p className="text-mainColor">R$25</p>
              </li>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor border-dotted">
                <p>Lavagem e tratamento</p>
                <p className="text-mainColor">R$120</p>
              </li>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor border-dotted">
                <p>Hidratação</p>
                <p className="text-mainColor">R$80</p>
              </li>
              <li className="flex justify-between py-4 my-4 border-b-2 border-mainColor border-dotted">
                <p>Coloração</p>
                <p className="text-mainColor">R$60</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
