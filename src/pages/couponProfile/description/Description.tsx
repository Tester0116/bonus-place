import HTMLReactParser from "html-react-parser";
import "./Description.scss";
const Description = ({ texts }: { texts: string }) => {
  return (
    <div className="description">
      <p className="terms__title">
        По купонам обслуживаются компании до 8 человек (включительно).
      </p>
      <p>{texts && HTMLReactParser(texts)}</p>
    </div>
  );
};

export default Description;
