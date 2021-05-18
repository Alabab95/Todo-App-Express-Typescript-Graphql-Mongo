/**
 * Auth Guard Middleware
 *
 */

import JwtLib from "../JwtLib";

class AuthGuard {
  public static isAuthenticated(token): any {
    const encoded = JwtLib.decode(token);
    if (encoded) {
      return true;
    }
    return false;
  }
}

export default AuthGuard;
