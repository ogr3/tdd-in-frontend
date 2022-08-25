import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

// Example of input data type (may, of course, be any type)
export interface MyInputData {
  name: string
}

// Example of output data type (may, of course, be any type)
export interface MyOutputData {
  result: string
}

@Component({
  selector: 'app-input-output-component',
  template: `
    <div class="input-output-component">
      <p>Input: {{myInput?.name}}</p>
      <button (click)="handleButtonClick()">Emit Output</button>
    </div>
  `,
  styles: [`
      .input-output-component {
        border: 1px grey solid;
        border-radius: 5px;
        background: lightgrey;
        padding: 0.25rem 1.0rem;
      }
      .input-output-component > button {
        margin-top: 0.5rem;
      }
  `]
})
export class InputOutputComponent {
  @Input()
  myInput?: MyInputData;
  @Output()
  readonly myOutput = new EventEmitter<MyOutputData>()

  handleButtonClick() {
    this.myOutput.emit({result: `An output event for ${this.myInput?.name}`});
  }
}

