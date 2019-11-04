import { Component, OnInit } from '@angular/core';
import { IpcService } from '../services/ipc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private ipc: IpcService) { }

  ngOnInit() {
  }
  checkUser() {
    this.ipc.checkUser(this.user);
  }
}
