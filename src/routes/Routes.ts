/**
 * Define all your routes
 *
 */

import { Application } from "express";
import Locals from "../providers/Locals";
import Log from "../utils/middlewares/Log";

import apiRouter from "./Api";
import graphQLRouter from "./GraphQL";

class Routes {
  public mountApi(_express: Application): Application {
    const apiPrefix = Locals.config().apiPrefix;
    Log.info("Routes :: Mounting API Routes...");

    return _express.use(`/${apiPrefix}`, apiRouter);
  }

  public mountGraphQL(_express: Application): Application {
    return _express.use(`/graphql`, graphQLRouter);
  }
}

export default new Routes();
