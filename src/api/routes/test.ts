import TestService from '@/services/test';
import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
  app.use('/abc', route);

  route.get('/v1', async (req: Request, res: Response) => {
    let data: { message: string; flag: boolean } = await Container.get(TestService).hello(req, res);
    return res.json(data).status(200);
  });
};
