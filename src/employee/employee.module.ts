import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './employee.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [EmployeeService,EmployeeRepository,PrismaService],
    controllers: [EmployeeController]
  })
 export class EmployeeModule {} 