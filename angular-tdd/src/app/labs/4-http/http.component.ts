import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

@Component({
  selector: 'app-http',
  template: `
    <div style="border: 1px grey solid; border-radius: 5px; background: lightgrey; padding: 0.25rem 1.0rem;">
      <div>Data from HTTP request: {{dataFromBackend$|async|json}}</div>
      <button (click)="sendHttpRequest()">Send HTTP Request</button>
    </div>
  `
})
export class HttpComponent {
  readonly dataFromBackend$ = this.httpClient.get('/api/some-resource')

  constructor(private readonly httpClient: HttpClient) {

  }

  sendHttpRequest() {
    this.httpClient.post('/api/some-resource', {
      name: 'kaka',
      payload: new Date()
    }).subscribe()
  }
}
