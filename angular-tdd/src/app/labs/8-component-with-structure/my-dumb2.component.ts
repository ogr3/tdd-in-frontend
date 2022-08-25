import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'app-my-dumb2',
  template: `
    <div style="border: 1px steelblue solid; border-radius: 5px; background: lightblue; padding: 0.25rem 1.0rem;">
      <p>C = {{inputC}}</p>
      <button (click)="result = !result ? ''+inputC :  result + ',' + inputC; outputD.emit(result+','+inputC)">Uppdatera
        D
      </button>
      <p>Result: {{result}}</p>
    </div>
  `
})
export class MyDumb2Component {
  @Input()
  inputC?: number|null
  @Output()
  readonly outputD = new EventEmitter<string>()

  result?: string = undefined
}
