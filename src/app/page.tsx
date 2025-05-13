'use client';

import React from "react";
import { useTranslation } from 'react-i18next';
import "./globals.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="hero">
        <div className="hero-left">
          <div>
            <h1>
              {t("hero.title1")} <br />
              <span className="hero-span">{t("hero.title2")}</span><br />
              <span className="hero-highlight">{t("hero.title3")}</span><br />
              {t("hero.title4")}
            </h1>
            <button className="hero-button">{t("hero.button")}</button>
          </div>
        </div>

        <div className="hero-right">
          <img src="./img/notbuk.svg" alt="Notebook" />
          <div className="hero-overlay-1"></div>
          <div className="hero-overlay-2"></div>
          <div className="hero-info-boxes">
            <div className="info-box-container">
              <div className="info-box">
                <img className="icon" src="/icon/v1.svg" alt="chart" />
                <div>
                  <h3>{t("experience.years")}</h3>
                  <p>{t("experience.description1")}</p>
                </div>
              </div>
              <div className="info-box">
                <img className="icon" src="./icon/v2.svg" alt="group" />
                <div>
                  <h3>{t("experience.projects")}</h3>
                  <p>{t("experience.description2")}</p>
                </div>
              </div>
              <div className="info-box">
                <img className="icon" src="./icon/v3.svg" alt="web" />
                <div>
                  <h3>{t("experience.services")}</h3>
                  <p>{t("experience.description3")}</p>
                </div>
              </div>
              <div className="info-box">
                <img className="icon" src="./icon/v4.svg" alt="security" />
                <div>
                  <h3>{t("experience.security")}</h3>
                  <p>{t("experience.description4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div>
          <p>
            {t("about.title")} <br />
            <span>{t("about.subtitle")}</span>
          </p>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <img src="./img/p0.svg" alt="Feature 1" />
          <div className="feature-content">
            <h3>{t("about.box1.title")}</h3>
            <p>{t("about.box1.text")}</p>
          </div>
        </div>

        <div className="feature">
          <img src="./img/p1.svg" alt="Feature 2" />
          <div className="feature-content">
            <h3>{t("about.box2.title")}</h3>
            <p>{t("about.box2.text")}</p>
          </div>
        </div>

        <div className="feature">
          <img src="./img/p3.svg" alt="Feature 3" />
          <div className="feature-content">
            <h3>{t("about.box3.title")}</h3>
            <p>{t("about.box3.text")}</p>
          </div>
        </div>
      </div>

      <p className="more-info">{t("more_info")}</p>

      <div className="banner">
        <h1>{t("projects.title")}</h1>
        <p>{t("projects.subtitle")}</p>
      </div>

      <div className="project-sections">
        <div className="project">
          <img src="./img/ran.svg" alt="Project 1" />
        </div>
        <div className="project-details">
          <h3>{t("chime.tok7")}</h3>
          <p>{t("chime.tok8")}</p>
          <button className="cta-button">{t("chime.tok9")}</button>
        </div>
      </div>

      <div className="project-sections reverse">
        <div className="project-details">
          <h3>{t("chime.tok10")}</h3>
          <p>{t("chime.tok11")}</p>
          <button className="cta-button">{t("chime.tok9")}</button>
        </div>
        <div className="project">
          <img src="./img/re1.svg" alt="Project 2" />
        </div>
      </div>

      <div className="project-sections">
        <div className="project">
          <img src="./img/re2.svg" alt="Project 3" />
        </div>
        <div className="project-details">
          <h3>{t("chime.tok12")}</h3>
          <p>{t("chime.tok11")}</p>
          <button className="cta-button">{t("chime.tok9")}</button>
        </div>
      </div>

      <div className="all-projects-button">
        <button className="view-all-button">{t("projects.all_button")}</button>
      </div>

      <div className="services-section">
        <h1>{t("services_section.title")}</h1>
        <p>{t("services_section.subtitle")}</p>
      </div>

      <div className="services-list">
        {[...Array(9)].map((_, idx) => (
          <div className="service" key={idx}>
            <img src={`./img/ic${idx % 4}.svg`} alt={`Service ${idx + 1}`} />
            <h3>{t(`services.service${idx + 1}.title`)}</h3>
            <p>{t(`services.service${idx + 1}.desc`)}</p>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h1>{t("contact_section.title")}</h1>
        <p>{t("contact_section.subtitle")}</p>
      </div>
    </div>
  );
};

export default Home;
