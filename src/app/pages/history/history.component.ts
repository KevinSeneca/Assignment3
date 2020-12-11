import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
  ) { }

  title: string = "History"

  history: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  showMe: boolean = false;

  getHistory() {
    this.spacexService.get('history').subscribe(
      (response: any[]) => {
        console.log(response);
        this.history = response;
        this.loading = false;
        this.showMe = true;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getHistory();
    }, 1000);
  }

}
