import React, { useRef } from "react";
import ticket from "../../assets/icons/card/tickets 1.svg";
import wallClock from "../../assets/icons/card/wall-clock 1.svg";
import close from "../../assets/icons/card/close 1.svg";
import "./QrModal.scss";
import { QRCodeSVG } from "qrcode.react";

interface propsType {
  setVisibleQr: Function;
}

function QrModal({ setVisibleQr }: propsType) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setVisibleQr(false);
  };

  return (
    <div className="qr-modal">
      <div className="qr-modal__inner" ref={modalRef}>
        <img
          onClick={() => {
            handleClick();
            document.body.classList.remove("scrollNo");
          }}
          src={close}
          className="close"
          alt="logo"
        />
        <div className="qr-code">
          <QRCodeSVG
            value="https://www.youtube.com/watch?v=vI6yG78jPnk"
            className="svg-qr"
          />
        </div>
        <p className="qr-modal__information">
          Блюда в четырех ресторанах «Чайхона № 1» со скидкой 50% Блюда в
          четырех ресторанах «Чайхона № 1» со скидкой 50% Блюда в четырех
          ресторанах «Чайхона № 1» со скидкой 50%
        </p>
        <div className="qr-modal__description">
          <span className="qr-modal__sale">50%</span>
          <div className="qr-modal__activity">
            <p>Период действия акции:</p>
            <div className="activity__date">
              <span>с 29.03.2021</span>
              <span>по 30.03.2021</span>
            </div>
          </div>
        </div>
        <div className="qr-modal__coupon">
          <div className="coupon__item">
            <img src={ticket} alt="logo" />
            <span>714 купонов купили</span>
          </div>
          <div className="coupon__item">
            <img src={wallClock} alt="logo" />
            <span>Время продаж ограничено!</span>
          </div>
          <div className="coupon__item"></div>
        </div>
      </div>
    </div>
  );
}

export default QrModal;
