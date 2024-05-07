import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { get, request } from 'http';
import { title } from 'process';
import { createrUserDto } from 'src/user/dtos/CreateUser.dto';
import { AuthGuard } from 'src/user/guard/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/user/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/user/services/users/users.service';

@Controller('users')
export class UserController {
    constructor(private userService:UsersService){}
    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.fetchUsers();
    }
    // @Get('posts')
    // getUserPosts(){
    //     return [
    //         {
    //             username: 'praveen',
    //             email: 'prav69@gmail.com',
    //             posts:[
    //                 {
    //                     id:1,
    //                     title: 'post 1',
    //                 },
    //                 {
    //                     id: 2,
    //                     title:"post 2",
    //                 },
    //             ],
    //         },
    //     ];
    // }
    // @Get('posts/new')
    // getNewUserPosts(){
    //     return[
    //         {
    //             username: 'praveen', 
    //             emai:'prav69@gmail.com',
    //             news:[
    //                 {
    //                     id:1,
    //                     news:'news 1',
    //                 },
    //                 {
    //                     id:2,
    //                     news:'news 2',
    //                 }
    //             ],
    //         },
    //     ];
    // }
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData:createrUserDto){
        // console.log(userData);
        console.log(typeof userData.age.toPrecision());
       return this.userService.createUser(userData);
       
    }

    // @Post()
    // createUser(@Req() request:Request, @Res() response:Response){
    //     console.log(request.body);
    //     response.send('Created');
    // }
    @Get(':id')
    getUserById(@Param('id',ParseIntPipe)  id:number){
        return this.userService.fetchUserById(id);
    }
    
}
function usePipes(arg0: ValidationPipe): (target: UserController, propertyKey: "createUser", descriptor: TypedPropertyDescriptor<(userData: createrUserDto) => {}>) => void | TypedPropertyDescriptor<(userData: createrUserDto) => {}> {
    throw new Error('Function not implemented.');
}

