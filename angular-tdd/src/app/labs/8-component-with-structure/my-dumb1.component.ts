import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'app-my-dumb1',
  template: `
    <div style="border: 1px grey solid; border-radius: 5px; background: lightgrey; padding: 0.25rem 1.0rem;">
      <p>A = {{inputA}}</p>
      <button (click)="count = count + 1; outputB.emit(count)">Uppdatera B</button>
      <p>Count: {{count}}</p>
    </div>
  `
})
export class MyDumb1Component {
  @Input()
  inputA?: string|null
  @Output()
  readonly outputB = new EventEmitter<number>()

  count: number = 0
}
