import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from '@/i18n';
import { getLanguageFromPath } from '@/i18n/languageRoutes';

const LanguageSync = () => {
  const location = useLocation();

  useEffect(() => {
    const language = getLanguageFromPath(location.pathname);

    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }

    document.documentElement.lang = language;

    try {
      window.localStorage.setItem('ozony-language', language);
    } catch {
      // localStorage may be unavailable in restricted browser modes.
    }
  }, [location.pathname]);

  return null;
};

export default LanguageSync;