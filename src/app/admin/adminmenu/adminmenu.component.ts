import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.scss'],
})
export class AdminmenuComponent implements OnInit {

  user: any = {};
  constructor(
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
  }

  getName(name: string){
    return name.split(' ')[0];
  }

}
