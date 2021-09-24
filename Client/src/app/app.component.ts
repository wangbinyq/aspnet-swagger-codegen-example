import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { Client, CountResponse } from 'src/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client';

  count$?: Observable<CountResponse>

  constructor(private client: Client) {

  }

  ngOnInit() {
    this.count$ = this.client.countGET()
  }

  getCount() {
    this.count$ = this.client.countGET()
  }

  postCount(add: number) {
    this.client.countPOST({
      add,
    }).pipe(
      tap(() => this.getCount())
    ).subscribe()
  }
}
