import { DbOperation } from 'src/app/shared/models/dbOperation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encashment',
  templateUrl: './encashment.component.html',
  styleUrls: ['./encashment.component.scss'],
})
export class EncashmentComponent implements OnInit {

  allRequests: any[] = [];
  isServiceRunning = false;

  constructor(
    private dbService: AuthService
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.isServiceRunning = true;
    const db: DbOperation = {
      collection: 'encashment',
    };
    this.dbService.find(db).subscribe((data: any) => {
      if (data.data) {
        if (data.data.length > 0) {
          this.allRequests = data.data;
          this.isServiceRunning = false;
        }
      }
    });
  }

  openInGmail(id: any) {
    window.open(`https://mail.google.com/mail/u/0/#search/Encashment+Request+${id}!`);
  }

}
