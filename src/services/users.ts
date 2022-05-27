import { Service, Inject } from 'typedi';
import MailerService from './mailer';
import { postResquest } from '../partials/api';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import { Request, Response } from 'express';
import config from '@/config';

@Service()
export default class UserService {
  constructor(
    @Inject('userModel') private userModel: Models.UserModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async getOtp(req: Request, res: Response): Promise<{ message: string; flag: boolean }> {
    try {
      const { deviceId, MobileNo } = req.body;
      const data = {
        appid: 'ROUNDPAYAPPID13APR20191351',
        domain: 'mlm.roundpay.net',
        imei: deviceId,
        regKey: '',
        serialNo: deviceId,
        MobileNo,
        version: '1.0',
      };
      console.log(data);
      const res = await postResquest(config.users.otp, data);
      return { message: res.data, flag: true };
    } catch (e) {
      return { message: e.message, flag: false };
    }
  }

  public async signUp(req: Request, res: Response): Promise<{ message: string; flag: boolean }> {
    try {
      const { deviceId, userCreate } = req.body;
      const { MobileNo, OTP, address, emailid, name, referalID } = userCreate;
      const data = {
        appid: 'ROUNDPAYAPPID13APR20191351',
        domain: 'mlm.roundpay.net',
        imei: deviceId || 'k69v1_64_titan_buffalo',
        regKey: '',
        serialNo: deviceId || 'k69v1_64_titan_buffalo',
        version: '1.0',
        userCreate: {
          GenerateOTP: '',
          OTP,
          address,
          emailid,
          mobileNo: MobileNo,
          name,
          outletName: '',
          pincode: '',
          referalID: referalID || '1',
          roleID: 3,
        },
      };
      const res = await postResquest(config.users.signUP, data);
      return { message: res.data, flag: true };
    } catch (e) {
      return { message: e.message, flag: false };
    }
  }
}
