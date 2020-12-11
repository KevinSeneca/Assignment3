import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})

export class RocketDetailsComponent implements OnInit {

  constructor(
    private spaceXService: SpacexService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    ) { }

  rocketDetails: any;
  loading: boolean = true;
  error: boolean = false;
  showMe: boolean = false;
  
  goBack() {
   this._location.back();
  }

  getRocketDetailsInfo() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;

      this.spaceXService.get(`rockets/${id}`).subscribe((response: any) => {
          console.log(response);
          this.rocketDetails = response;

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
      this.getRocketDetailsInfo();
    }, 1000);
  }

}
