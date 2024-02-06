const Pricing = () => {
  return (
    <section className="p-4 bg-darkWhite text-center font-bold">
      <h2>Nossos valores</h2>
      <div>
        <ul>
          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Corte pente único</p>
            <p className="text-mainColor">R$25</p>
          </li>
          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Corte degradê</p>
            <p className="text-mainColor">R$35</p>
          </li>

          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Aparo de barba</p>
            <p className="text-mainColor">R$35</p>
          </li>
          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Barba completa</p>
            <p className="text-mainColor">R$25</p>
          </li>

          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Lavagem e tratamento</p>
            <p className="text-mainColor">R$120</p>
          </li>
          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Hidratação</p>
            <p className="text-mainColor">R$80</p>
          </li>

          <li className="flex justify-between py-4 my-4 border-b-2 border-dotted">
            <p>Coloração</p>
            <p className="text-mainColor">R$60</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
