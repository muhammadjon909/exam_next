'use client';

import React from "react";
import "@/app/xizmatlar/page.css"
import { useTranslation } from 'react-i18next';

const XizmatlarPage = () => {

  const { t } = useTranslation();

  return (
    <div className="services-container">
      <div className="header-section">
        <div className="header-title">
          <h1>
            {t("xiz.mk")} <br />
            <span className="header-subtitle">{t("xiz.mk2")}</span> <br />
            <span className="header-highlight">{t("xiz.mk3")}</span> <br />
            {t("xiz.mk4")}
          </h1>
        </div>
        <div className="header-image">
          <img src="./img/sm.svg" alt="Service" />
        </div>
      </div>

      {[...Array(8)].map((_, index) => (
        <div className="service-box" key={index}>
          <div className="service-content">
            <h1>{t("xiz.mk5")}</h1>

            <div className="service-layout">
              <div>
                <h2>{t("xiz.mk6")}</h2>
                <p>{t("xiz.mk7")}</p>
              </div>
              <div>
                <h2>{t("xiz.mk8")}</h2>
                <p>{t("xiz.mk9")}</p>
              </div>
            </div>

            <div>
              <h2>{t("xiz.mk10")}</h2>
              <p className="service-description">{t("xiz.mk11")}</p>
            </div>

            <p className="service-detail">{t("xiz.mk12")}</p>
            <p>{t("xiz.mk13")}</p>
            <p>{t("xiz.mk14")}</p>

            <button className="service-button">{t("xiz.mk15")}</button>

            <img className="floating-image" src={`./img/ec${index + 1}.png`} alt="Decoration" />
          </div>

          <div>
            <img className="service-image" src="./img/im1.png" alt="Service Image" />
          </div>
        </div>
      ))}

      <div className="footer-banner">
        <h1>{t("contact_section.title")}</h1>
        <p>{t("contact_section.subtitle")}</p>
      </div>

    </div>
  );
};

export default XizmatlarPage;
