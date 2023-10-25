import { Body, Injectable } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
    constructor(private readonly employeePrisma: EmployeeRepository) { }

    async createEmpData(employeeDto: EmployeeDto): Promise<any> 
    {
        const customer = await this.employeePrisma.createEmployee(employeeDto);
        console.log("customerotp", customer)
        return customer;
    }
    

}
