import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})

export class LaunchDetailsComponent implements OnInit {

  constructor(
    private spaceXService: SpacexService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    ) { }

  launchDetails: any;
  loading: boolean = true;
  error: boolean = false;
  showMe: boolean = false;
  
  goBack() {
   this._location.back();
  }

  getLaunchDetailsInfo() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;

      this.spaceXService.get(`Launches/${id}`).subscribe((response: any) => {
          console.log(response);
          this.launchDetails = response;

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
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getLaunchDetailsInfo();
    }, 1000);
  }

}
