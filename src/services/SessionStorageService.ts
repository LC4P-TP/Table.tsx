export const TOKEN_KEY = "access_token";
export const USER_KEY = "user_info";

export const SessionStorageService = {
  get: <T>(key: string): T | null => {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  },

  set: <T>(key: string, value: T): void => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key: string): void => {
    sessionStorage.removeItem(key);
  },
};
