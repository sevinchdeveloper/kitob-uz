//=========================================================== LOCAL STORAGE'GA NIMADIR QO'SHISH
export const setStorage = (key: string, token: string) => {
  localStorage.setItem(key, JSON.stringify(token));
};

//=========================================================== LOCAL STORAGE'DAN NIMANIDIR OLISH
export const getStorage = <T = string>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

//=========================================================== LOCAL STORAGE'DAN NIMANIDIR O'CHIRISH
export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};