import HTMLReactParser from "html-react-parser";

import "./Terms.scss";
const Terms = ({ texts }: { texts: string }) => {
  return (
    <div className="terms">
      <p className="terms__title">
        Купон дает право скидки 50% на блюда кухни на выбор в четырех
        ресторанах.
      </p>
      <p className="terms__descr">{texts && HTMLReactParser(texts)}</p>
    </div>
  );
};

export default Terms;
