import React from "react";
import "./Address.scss";
const Address = () => {
  return (
    <div className="address">
      <p className="terms__title">
        Акция действует в ресторанах по следующим адресам:
      </p>
      <p className="terms__descr">— г. Москва, ул. Новослободская, д. 16;</p>
      <p className='className="terms__descr"'>
        — г. Москва, ул. Городецкая, д. 5;
      </p>
      <p className='className="terms__descr"'>
        — г. Москва, ул. Петровка, д. 18/2 (ул. Петровские Линии, д. 2/18);
      </p>
      <p className='className="terms__descr"'>
        — г. Москва, ул. 1-я Тверская-Ямская, д. 7.
      </p>
    </div>
  );
};

export default Address;
