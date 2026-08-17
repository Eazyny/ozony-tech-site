import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/i18n/locales/en/common.json";
import esCommon from "@/i18n/locales/es/common.json";

import enHome from "@/i18n/locales/en/home.json";
import esHome from "@/i18n/locales/es/home.json";

import enContactPage from "@/i18n/locales/en/contactPage.json";
import esContactPage from "@/i18n/locales/es/contactPage.json";

import enAILeadAgent from "@/i18n/locales/en/aiLeadAgent.json";
import esAILeadAgent from "@/i18n/locales/es/aiLeadAgent.json";

import enAILeadCapture from "@/i18n/locales/en/aiLeadCapture.json";
import esAILeadCapture from "@/i18n/locales/es/aiLeadCapture.json";

import enServiceLanding from "@/i18n/locales/en/serviceLanding.json";
import esServiceLanding from "@/i18n/locales/es/serviceLanding.json";

import enServicePages from "@/i18n/locales/en/servicePages.json";
import esServicePages from "@/i18n/locales/es/servicePages.json";

import enCertifications from "@/i18n/locales/en/certifications.json";
import esCertifications from "@/i18n/locales/es/certifications.json";

import enPackages from "@/i18n/locales/en/packages.json";
import esPackages from "@/i18n/locales/es/packages.json";

import enPrivacyPolicy from "@/i18n/locales/en/privacyPolicy.json";
import esPrivacyPolicy from "@/i18n/locales/es/privacyPolicy.json";

import enNotFound from "@/i18n/locales/en/notFound.json";
import esNotFound from "@/i18n/locales/es/notFound.json";

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.location.pathname === "/es" ||
    window.location.pathname.startsWith("/es/")
    ? "es"
    : "en";
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      contactPage: enContactPage,
      aiLeadAgent: enAILeadAgent,
      aiLeadCapture: enAILeadCapture,
      serviceLanding: enServiceLanding,
      servicePages: enServicePages,
      certifications: enCertifications,
      packages: enPackages,
      privacyPolicy: enPrivacyPolicy,
      notFound: enNotFound,
    },

    es: {
      common: esCommon,
      home: esHome,
      contactPage: esContactPage,
      aiLeadAgent: esAILeadAgent,
      aiLeadCapture: esAILeadCapture,
      serviceLanding: esServiceLanding,
      servicePages: esServicePages,
      certifications: esCertifications,
      packages: esPackages,
      privacyPolicy: esPrivacyPolicy,
      notFound: esNotFound,
    },
  },

  lng: getInitialLanguage(),
  fallbackLng: "en",

  supportedLngs: ["en", "es"],

  defaultNS: "common",

  ns: [
    "common",
    "home",
    "contactPage",
    "aiLeadAgent",
    "aiLeadCapture",
    "serviceLanding",
    "servicePages",
    "certifications",
    "packages",
    "privacyPolicy",
    "notFound",
  ],

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
