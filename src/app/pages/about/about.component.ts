import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private spaceXService: SpacexService,
  ) { }

  title: string = "About";

  company: any;
  loading: boolean = true;
  error: boolean = false;
  showMe: boolean = false;

  getCompanyInfo() {
    this.spaceXService.get('company', 'v4').subscribe((response: any) => {
      console.log(response);
      this.company = response;
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
      this.getCompanyInfo();
    }, 1000);
  }

}
