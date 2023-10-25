import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import infoMessage from 'src/messages/info.message';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
   constructor(private readonly employeeService: EmployeeService) { }

 //insert the data using post method 
 // API Path => http://localhost:5082/api/v1/test/employee
   @Post()
   async createEmployee(@Body() createEmployeeDto: EmployeeDto): Promise<any> {
      const createContactData = await this.employeeService.createEmpData(createEmployeeDto);
      return {
         success: true,
         statusCode: HttpStatus.CREATED,
         message: infoMessage.INFO0000,
         data: createContactData
      };
   }
}





