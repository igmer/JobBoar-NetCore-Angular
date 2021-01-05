import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  httpClient: HttpClient;
  baseUrl: string;
  public jobs: JobBoard[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
  };

    ngOnInit() {
      this.loadData();
  }

  loadData() {
    this.httpClient.get<JobBoard[]>(this.baseUrl + 'home').subscribe(result => {
      this.jobs = result;
      console.log(this.jobs)
    }, error => console.error(error));

  }

}
