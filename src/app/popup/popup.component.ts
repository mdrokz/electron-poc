import { Component, OnInit } from '@angular/core';
import { IpcService } from '../services/ipc.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  user: any = {};
  constructor(private ipc: IpcService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }
  addData() {
    this.ipc.popupUser(this.user).then(res => {
      console.log(res, this.user);
      if (res.status === 200) {
        this.dialog.closeAll();
        this.router.navigateByUrl('/login');
      } else {
        console.error(res.error);
      }
    });
  }
}
