import { infoApi } from '../../redux/api/infoApi';
import './Politics.scss'

const Politics = () => {
  const { data } = infoApi.useFetchPrivacyPolicyQuery();
  return (
    <div className="politics">
      <div className="container">
        <p>BREADCRUMBS</p>
        {
          data ?
            <div className="politics__block">
              <h1 className="politics__title">{data.title}</h1>
              <p className="politics__text">{data.description}</p>
            </div> : ""
        }
      </div>
    </div>
  );
};

export default Politics;
