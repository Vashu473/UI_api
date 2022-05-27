import { Service, Inject } from 'typedi';
import MailerService from './mailer';

import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import { Request, Response } from 'express';

@Service()
export default class TestService {
  constructor(
    @Inject('userModel') private userModel: Models.UserModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async hello(req: Request, res: Response): Promise<{ message: string; flag: boolean }> {
    try {
      return { message: 'API WORKS', flag: true };
    } catch (e) {
      return { message: e.message, flag: false };
    }
  }
}
