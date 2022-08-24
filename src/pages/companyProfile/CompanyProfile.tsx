import React, { useEffect, useState } from "react";
import "./CompanyProfile.scss";
import Stock from "./stock/Stock";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import Contact from "../../components/contact/Contact";
import { companyApi } from "../../redux/api/company";
import treatmentCompanyContact from "../../hooks/treatmentCompanyContact";
import {treatmentCompanyCoordinates, treatmentCoordinates} from "../../hooks/treatmentCoordinates";
import Map from "../../components/map/map";
import {useParams} from "react-router-dom";

const CompanyProfile = () => {
  const {id} = useParams()
  const [activeBtn, setActiveBtn] = useState<boolean>(true);
  const { data: company, isLoading: loadingCompany } = companyApi.useGetCompanyProfileQuery(id);

  return (
    <div className="companyProfile">
      <div className="container">
        <BreadCrumbs
          location={[
            {
              folder: `companies/${id}`,
              name: `${company?.company_name}`,
            },
          ]}
        />
        {company ? (
          <>
            <div className="companyProfile__info">
              <div className="info__img">
                <img src={company.logo} alt="" />
              </div>
              <div className="info__text">
                <h1 className="text-title">{company.company_name}</h1>
                <p className="text-descr">{company.description}</p>
              </div>
            </div>
            <div className="companyProfile__btns">
              <button
                className={`bnt__stock ${activeBtn ? "active" : ""}`}
                onClick={() => setActiveBtn(true)}
              >
                Акции
              </button>
              <button
                className={`bnt__stock ${activeBtn ? "" : "active"}`}
                onClick={() => setActiveBtn(false)}
              >
                Контакты
              </button>
            </div>
            {activeBtn ? (
              <Stock coupons={company.coupons} />
            ) : (
              <>
                {<Contact contact={treatmentCompanyContact(company)} />}
                {<Map coordinates={treatmentCompanyCoordinates(company.coordinates)} />}
              </>
            )
            }
          </>
        ) : (
          ""
        )}
        
      </div>
    </div>
  );
};

export default CompanyProfile;
