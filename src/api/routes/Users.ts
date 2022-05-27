import TestService from '@/services/test';
import UserService from '@/services/users';
import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
  app.use('/v1/users', route);
  //   for OTP
  // request : {
  // "appid": "ROUNDPAYAPPID13APR20191351",
  // "domain": "mlm.roundpay.net",
  // "imei": device imei code|| device id,
  // "regKey": "",
  // "serialNo": device S.R Number || device id,
  // "MobileNo":"1234567890",
  // "version": "1.0"
  // }
  route.post('/getotp', async (req: Request, res: Response) => {
    console.log(req.body);
    let data: { message: string; flag: boolean } = await Container.get(UserService).getOtp(req, res);
    return res.json(data).status(200);
  });
  //   for Front signUp
  // request : {
  //     "appid": "ROUNDPAYAPPID13APR20191351",
  //     "domain": "mlm.roundpay.net",
  //     "imei": "k69v1_64_titan_buffalo",
  //     "regKey": "",
  //     "serialNo": "k69v1_64_titan_buffalo",
  //   "version": "1.0",
  //     "userCreate": {
  //         "GenerateOTP": "",
  //         "OTP": "9388",
  //         "address": "lucknow",
  //         "emailid": "vashu@gmail.com",
  //         "mobileNo": "8736079780",
  //         "name": "Vashu",
  //         "outletName": "",
  //         "pincode": "",
  //         "referalID": "1",
  //         "roleID": 3
  //     }
  // }
  route.post('/signup', async (req: Request, res: Response) => {
    let data: { message: string; flag: boolean } = await Container.get(UserService).signUp(req, res);
    return res.json(data).status(200);
  });
};
