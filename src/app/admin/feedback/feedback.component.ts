import { AuthService } from './../../shared/services/auth.service';
import { DbOperation } from './../../shared/models/dbOperation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  allFeedBacks: any = [];
  isServiceRunning = false;

  constructor(
    private dbService: AuthService,
  ) { }

  ngOnInit() {
    this.getFeedBacks();
  }

  getFeedBacks() {
    const db: DbOperation = {
      collection: 'feedback',
    };
    this.isServiceRunning = true;
    this.dbService.find(db).subscribe((data: any) => {
      if (data.data) {
        if (data.data.length > 0) {
          this.allFeedBacks = data.data;
          this.sort();
        }
        this.isServiceRunning = false;
      }
    });
  }

  sort() {
    this.allFeedBacks.sort((a: any, b: any) => {
      const c: any = new Date(a.createdAt);
      const d: any = new Date(b.createdAt);
      return d - c;
    });
  }

}
