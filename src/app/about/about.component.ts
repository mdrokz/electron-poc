import { Component, OnInit } from '@angular/core';
import { ipcMain, ipcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';
import { IpcService } from './../services/ipc.service';
// import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  user: any = {};



  constructor(private ipc: IpcService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  testOpen() {
    this.dialog.open(PopupComponent, {
      height: '400px',
      width: '600px',
      data: { data: this.user }
    });
  }

  // testSend() {
  //   this.ipc.popupUser(this.user).then(res => {
  //     console.log(res);
  //   });

  // }
}
