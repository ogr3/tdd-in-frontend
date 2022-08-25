import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

@Component({
  selector: 'app-my-container',
  template: `
    <app-my-dumb1 style="display: block; margin-bottom: 0.5rem"
                  [inputA]="dataA$ | async"
                  (outputB)="handleDumb1ChangeB($event)">
    </app-my-dumb1>
    <app-my-dumb2 [inputC]="dataC$ | async"
                  (outputD)="handleDumb2ChangeD($event)">
    </app-my-dumb2>
  `
})
export class MyContainerComponent {
  dataA$ = this.httpClient.get<string>('/api/a-data')
  dataC$ = this.httpClient.get<number>('/api/c-data');

  constructor(readonly httpClient: HttpClient) {
    this.httpClient.get<string>('/api/a-data')
  }

  handleDumb1ChangeB(changeBEvent: number) {
    this.httpClient.post('/api/b-data', changeBEvent)
      .subscribe();
  }

  handleDumb2ChangeD(changeDEvent: string) {
    this.httpClient.post('/api/d-data', changeDEvent)
      .subscribe();
  }
}
