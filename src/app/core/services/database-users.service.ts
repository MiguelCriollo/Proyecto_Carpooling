import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Injectable()
export class DatabaseUserService {
  users: User[] = [
    {
      name: 'Dav',
      idCard: '103123',
      email: 'dav@gmail.com',
      password: '123123',
      confirmedPassword: ''
    },
    {
      name: 'Medardo',
      idCard: '103123a',
      email: 'medardo@gmail.com',
      password: '123125',
      confirmedPassword: ''
    },
  ];

  findUser(user: User): boolean {
    let myUser = undefined;
    this.users.forEach(value=>{
        if(value.email == user.email && value.password == user.password){
            myUser = value;
        }
    })
    console.log(myUser);
    return (myUser != undefined);

  }
}
