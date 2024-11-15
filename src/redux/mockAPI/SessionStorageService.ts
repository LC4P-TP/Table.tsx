export const TOKEN_KEY = "access_token";
export const USER_KEY = "user_info";

export const SessionStorageService = {
  get: (key: string) => {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  },

  set: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key: string) => {
    sessionStorage.removeItem(key);
  },
};
