class LocalStorage {
  constructor() {}

  static set(key: string, item: string) {
    localStorage.setItem(key, item);
  }

  static get(key: string): string | null {
    return localStorage.getItem(key);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}

export class AccessTokenStorage extends LocalStorage {
  private static readonly TOKEN_KEY = "accessToken";

  static setToken(token: string) {
    super.set(AccessTokenStorage.TOKEN_KEY, token);
  }

  static getToken(): string | null {
    return super.get(AccessTokenStorage.TOKEN_KEY);
  }

  static removeToken() {
    super.remove(AccessTokenStorage.TOKEN_KEY);
  }

  static hasToken(): boolean {
    return !!AccessTokenStorage.getToken();
  }

  static getAuthorizationHeader(): string | null {
    const token = AccessTokenStorage.getToken();
    return token ? `Bearer ${token}` : null;
  }
}
