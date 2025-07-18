//=========================================================== LOCAL STORAGE'GA TOKENNI QO'SHISH
export const setToken = (key: string, token: string) => {
  localStorage.setItem(key, JSON.stringify(token));
};

//=========================================================== LOCAL STORAGE'DAN TOKEN OLISH
export const getToken = <T = string>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

//=========================================================== LOCAL STORAGE'DAN TOKENNI O'CHIRISH
export const removeToken = (key: string) => {
  localStorage.removeItem(key);
};