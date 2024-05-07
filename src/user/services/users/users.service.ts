import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    // createUser() {
    //     throw new Error('Method not implemented.');
    // }
    private fackUsers=[
    {username: 'praveen', email:'prav69@gmail.com'},
    {username: 'sai', email:'sai@gmail.com'},
    {username: 'vijay', email:'vijay@gmail.com'},
    {username: 'prasanth', email:'prasanth@gmail.com'}
    ];
    fetchUsers(){
        return this.fackUsers;
    }

    createUser(userDetails:CreateUserType){
        this.fackUsers.push(userDetails);
        return;
    }
    fetchUserById(id:number){
        return {id,username:'prav',email:'giii@gmail.com'}
    }
    
}
