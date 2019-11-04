import { IpcService } from './../services/ipc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(public ipc: IpcService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }
  addUser() {
    this.ipc.registerUser(this.user).then(res => {
      console.log(res, this.user);
      if (res.status === 200) {
        this.router.navigateByUrl('/login');
      } else {
        console.error(res.error);
      }
    });
  }

  testOpen() {
    this.dialog.open(PopupComponent, {
      height: '400px',
      width: '600px',
      data: { data: this.user }
    });
  }
}
