import { IpcService } from './../services/ipc.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:any = {};
  constructor(public ipc:IpcService,private router:Router) { }

  ngOnInit() {
  }
  addUser() {
    this.ipc.registerUser(this.user).then(res => {
      console.log(res,this.user);
      if(res.status == 200) {
        this.router.navigateByUrl('/login');
      } else {
        console.error(res.error);
      }
    })
  }
}
