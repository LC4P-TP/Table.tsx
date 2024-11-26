import Cookie, { CookieSetOptions } from "universal-cookie";

const cookie = new Cookie();

const CookieService = {
  get: (key: string): string | undefined => cookie.get(key),

  set: (key: string, value: string, options?: CookieSetOptions): void => {
    cookie.set(key, value, options);
  },

  remove: (key: string, options?: CookieSetOptions): void => {
    cookie.remove(key, options);
  },
};

export default CookieService;
