import { IsNotEmpty } from 'class-validator';

export class EmployeeDto {

  @IsNotEmpty()
  empName: string;

  @IsNotEmpty()
  email :string 

  @IsNotEmpty()
  mobileNumber:string
  
}
