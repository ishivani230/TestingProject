import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeModule } from './employee/employee.module';
import { EmptyError } from 'rxjs';
import { EmployeeRepository } from './employee/employee.repository';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';





@Module({
  imports: [ConfigModule.forRoot(),PrismaModule,EmployeeModule],
  controllers: [EmployeeController],
  providers: [EmployeeService,EmployeeRepository,PrismaService],
})

export class AppModule {}
