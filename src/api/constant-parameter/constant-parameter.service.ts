import { Injectable, Next, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { IResConstantParameter, IResConstantParameterData } from './dto/i-res-constant-parameter.interface';
import * as fs from 'fs';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConstantParameterService {

    // private readonly constantparam = path.join(__dirname, '..', 'assets', 'files', 'dataparam.json');
    constructor(
        private configService: ConfigService
    ) { }

    async getconstantcalculateloan(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
        const constantparam = path.join(__dirname, '..', '..', 'static', 'param.json');
        try {
            const data = fs.readFileSync(constantparam, 'utf-8');
            const dataitem = JSON.parse(data) as IResConstantParameterData;
            return res.status(200).send({
                status: 200,
                message: 'success',
                data: dataitem
            } as IResConstantParameter)
        } catch (e) {
            return res.status(200).send({
                status: 500,
                message: `FAIL : ${e.message ? e.message : `No return msg`}`,
                data: {} as IResConstantParameterData
            } as IResConstantParameter)
        }
    }

}