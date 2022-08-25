import { Component } from '@angular/core'
import { TestService } from '../test.service'

@Component({
  selector: 'app-injectables-component',
  template: `
    <div class="injectables-component">
      <p class="message">Message fetched from service: {{theService.getSomeData()}}</p>
    </div>
  `,
  styles: [`
      .injectables-component {
        border: 1px grey solid;
        border-radius: 5px;
        background: lightgrey;
        padding: 0.25rem 1.0rem;
      }
      .injectables-component > button {
        margin-top: 0.5rem;
      }
  `]
})
export class InjectablesComponent {
  constructor(public readonly theService: TestService) {
  }
}

