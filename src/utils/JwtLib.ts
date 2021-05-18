/**
 * JWToken Operations
 *
 */

import * as jwt from "jsonwebtoken";
import * as expressJwt from "express-jwt";

import Locals from "../providers/Locals";
import { Tokens } from "../interfaces/User";

class JwtLib {
  public static signIn(email, password, id): any {
    return jwt.sign({ email, password, id }, Locals.config().appSecret, {
      expiresIn: Locals.config().jwtExpiresIn,
    });
  }

  public static decode(token): any {
    return jwt.decode(token, Locals.config().appSecret);
  }

  public static verify(token): any {
    return jwt.verify(token, Locals.config().appSecret);
  }

  public static tokenFromHeaders(req): any {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    }

    return "";
  }
  public static validateJwt(): any {
    const value = expressJwt(
      { secret: Locals.config().appSecret },
      {
        expiresIn: Locals.config().jwtExpiresIn,
      },
    );
    console.log("validateJwt", value);
    return value;
  }
}

export default JwtLib;
