/**
 * Define all your API routes
 *
 */

import { Router } from 'express';
import * as passport from 'passport';

const router = Router();

router.get('/', (req, res, next) => {
  return res.json({
    status: 'Ok!'
  });
});

export default router;
