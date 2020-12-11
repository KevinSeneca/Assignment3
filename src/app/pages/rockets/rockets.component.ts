import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})

export class RocketsComponent implements OnInit {

  constructor(
    private spaceXService: SpacexService,
  ) { }

  title: string = "Rockets"

  rockets: any;
  loading: boolean = true;
  error: boolean = false;
  showMe: boolean = false;

  getRocketsInfo() {
    this.spaceXService.get('rockets', 'v4').subscribe((response: any) => {
      console.log(response);
      this.rockets = response;
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
      this.getRocketsInfo();
    }, 1000);
  }

}
