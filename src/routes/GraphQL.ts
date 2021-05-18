import { Router } from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as expressJwt from 'express-jwt';

import privateSchema from "../graphql/schema/PrivateSchema";
import publicResolvers from "../graphql/resolver/PublicResolver";
import privatedResolvers from "../graphql/resolver/PrivateResolver";
import Locals from '../providers/Locals';
import publicSchema from "../graphql/schema/PublicSchema";

const router = Router();

// Public Routes
router.use(
  '/public',
  graphqlHTTP((request, response, graphQLParams) => ({
    schema: publicSchema,
    rootValue: publicResolvers,
    graphiql: true,
    customFormatErrorFn: error => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path
    })
  }))
);

// Protected Routes
router.use(
  '/private',
  expressJwt({ secret: Locals.config().appSecret }),
  graphqlHTTP((request, response, graphQLParams) => ({
    schema: privateSchema,
    rootValue: privatedResolvers,
    graphiql: true,
    customFormatErrorFn: error => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path
    })
  }))
);

export default router;
