import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TestService} from "../test.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-input-output',
  template: `
    <div class="new-input-output">
      <p>Input: {{myInput}}</p>
      <p>Testservice: {{testService.getSomeData()}}</p>
      <button (click)="counter = counter + 1; myOutput.emit('Banan')">Emit</button>
      <div>Counter: {{counter}}</div>
      <button (click)="httpClient.post('/backend', 'Message to backend').subscribe()">Post</button>
    </div>
  `,
  styles: [`
    .new-input-output {
      background: antiquewhite;
      padding: 0.25rem 1rem;
      border: solid 1px dimgray;
      border-radius: 6px;
    }
  `]
})
export class NewInputOutputComponent {
  @Input()
  myInput?: string
  @Output()
  readonly myOutput = new EventEmitter<string>()

  counter: number = 0

  constructor(readonly testService: TestService, readonly httpClient: HttpClient) {
  }
}
