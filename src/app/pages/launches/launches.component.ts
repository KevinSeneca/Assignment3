import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})

export class LaunchesComponent implements OnInit {

  constructor(
    private spaceXService: SpacexService,
  ) { }
  
  title: string = "Launches";

  launches: any;
  rockets: any;
  loading: boolean = true;
  error: boolean = false;
  showMe: boolean = false;

  getLaunchesInfo() {
    this.spaceXService.get('launches', 'v4').subscribe((response: any) => {
        console.log(response);
        this.launches = response;

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
      this.getLaunchesInfo();
    }, 1000);
  }

}

