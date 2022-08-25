import {
  Component,
  EventEmitter,
  Output
} from '@angular/core'

@Component({
  selector: 'app-test-structure-component',
  template: `
    <div style="border: 1px grey solid; border-radius: 5px; background: lightgrey; padding: 0.25rem 1.0rem;">
      <button (click)="handleB_ButtonClick()">B</button>
      <p class="message">{{message}}</p>
    </div>
  `
})
export class TestStructureComponent {
  @Output()
  readonly dOutput = new EventEmitter<void>()
  message: string = 'A';

  handleB_ButtonClick() {
    this.message = 'C';
    this.dOutput.emit();
  }
}

