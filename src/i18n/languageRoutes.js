export const SUPPORTED_LANGUAGES = ["en", "es"];

export const DEFAULT_LANGUAGE = "en";

export const isSpanishPath = (pathname = "") => {
  return pathname === "/es" || pathname.startsWith("/es/");
};

export const getLanguageFromPath = (pathname = "") => {
  return isSpanishPath(pathname) ? "es" : "en";
};

export const stripLanguagePrefix = (pathname = "/") => {
  if (pathname === "/es") {
    return "/";
  }

  if (pathname.startsWith("/es/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
};

export const localizePath = (pathname = "/", language = "en") => {
  const cleanPath = stripLanguagePrefix(pathname);

  if (language === "es") {
    return cleanPath === "/" ? "/es" : `/es${cleanPath}`;
  }

  return cleanPath;
};

export const switchLanguagePath = (pathname = "/", language = "en") => {
  return localizePath(pathname, language);
};
