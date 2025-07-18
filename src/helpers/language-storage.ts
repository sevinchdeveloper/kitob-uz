//=========================================================== LOCAL STORAGE'GA TIL QO'SHISH
export const setLanguage = (lang: string) => {
  localStorage.setItem("i18nextLng", lang);
};

//=========================================================== LOCAL STORAGE'DAN TILNI OLISH
export const getLanguage = (): string => {
  return localStorage.getItem("i18nextLng") || "ru";
};

//=========================================================== LOCAL STORAGE'DAN TIL O'CHIRISH
export const removeLanguage = () => {
  localStorage.removeItem("i18nextLng");
};