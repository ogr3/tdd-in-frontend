import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class MyOtherContainterPresenterService {
  readonly dataA$ = this.httpClient.get<string>('/api/a-data')
  readonly dataC$ = this.httpClient.get<number>('/api/c-data');

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
