import { Controller, Get, Next, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConstantParameterService } from './constant-parameter.service';
import { ApiBearerAuth, ApiBody, ApiExcludeEndpoint, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@Controller('constant-paramter')
@ApiTags('Constant-Paramter')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)

export class ConstantParameterController {

    constructor(private constantParameterService: ConstantParameterService) { }

    @Get('/getconstantcalculateloan')
    async getconstantcalculateloan(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {

        return this.constantParameterService.getconstantcalculateloan(req, res, next)
    }

}
