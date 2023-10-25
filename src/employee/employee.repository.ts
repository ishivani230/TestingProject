import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeRepository {
    constructor(private readonly prisma: PrismaService) { }
    
    async createEmployee(employeeDto: EmployeeDto): Promise<any> {
        return new Promise((resolve, reject) => {
            this.prisma.employee.create({
                data: {
                    EmpName: employeeDto.empName,
                    Email: employeeDto.email,
                    MobileNumber: employeeDto.mobileNumber,
                }
            })
                .then((employees) => {
                    resolve(employees)
                })
                .catch((error) => reject(error))
                .finally(() => this.prisma.$disconnect());
        });
    }

}








