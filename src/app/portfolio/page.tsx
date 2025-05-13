'use client';

import { useTranslation } from 'react-i18next';
import './page.css';

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <div className='portfolio-container'>
      <div className="top-section">
        <div className="title-wrapper">
          <h1>
            {t("chime.tok1")} <br />
            <span className="subtitle">{t("chime.tok2")}</span> <br />
            <span className="highlighted-text">{t("chime.tok3")}</span> <br />
            {t("chime.tok4")}
          </h1>
        </div>
        <div className="image-wrapper">
          <img src="./img/port1.png" alt="Portfolio" />
        </div>
      </div>

      <div className="banner-section">
        <h1>{t("chime.tok5")}</h1>
        <p>{t("chime.tok6")}</p>
      </div>

      <div className="content-section">
        <div className="content-block">
          <img src="./img/ran.svg" alt="Feature 1" />
        </div>
        <div className="content-block">
          <h3>{t("chime.tok7")}</h3>
          <p>{t("chime.tok8")}</p>
          <button className="action-button">{t("chime.tok9")}</button>
        </div>
      </div>

      <div className="content-section reverse">
        <div className="content-block">
          <h3>{t("chime.tok10")}</h3>
          <p>{t("chime.tok11")}</p>
          <button className="action-button">{t("chime.tok9")}</button>
        </div>
        <div className="content-block">
          <img src="./img/re1.svg" alt="Feature 2" />
        </div>
      </div>

      <div className="content-section">
        <div className="content-block">
          <img src="./img/re2.svg" alt="Feature 3" />
        </div>
        <div className="content-block">
          <h3>{t("chime.tok12")}</h3>
          <p>{t("chime.tok11")}</p>
          <button className="action-button">{t("chime.tok9")}</button>
        </div>
      </div>

      <div className="banner-section">
        <h1>{t("contact_section.title")}</h1>
        <p>{t("contact_section.subtitle")}</p>
      </div>
    </div>
  )
}

export default PortfolioPage;
