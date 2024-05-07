import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class createrUserDto{
    @IsNotEmpty()
    username:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsNotEmpty()
    age:number;
}

