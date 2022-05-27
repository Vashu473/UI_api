import { Router } from 'express';
import auth from './routes/auth';
import agendash from './routes/agendash';
import test from './routes/test';
import Users from './routes/Users';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  agendash(app);
  test(app);
  Users(app);

  return app;
};
