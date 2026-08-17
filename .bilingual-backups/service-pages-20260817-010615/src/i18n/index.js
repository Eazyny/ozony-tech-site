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
    },

    es: {
      common: esCommon,
      home: esHome,
      contactPage: esContactPage,
      aiLeadAgent: esAILeadAgent,
      aiLeadCapture: esAILeadCapture,
      serviceLanding: esServiceLanding,
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
  ],

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
