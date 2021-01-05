import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: JobBoard[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<JobBoard[]>(baseUrl + 'home').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface JobBoard {
  Job: string,
  JobTitle: string,
  Description: string,
  CretateAt: string,
  ExpiredAt: string

}
