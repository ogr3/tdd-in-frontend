import { Component } from '@angular/core'
import { TestService } from '../test.service'

@Component({
  selector: 'app-my-third',
  template: `
    <div style="border: 1px grey solid; border-radius: 5px; background: lightgrey; padding: 0.25rem 1.0rem;">
      <button (click)='doDelayedAction()'>Do delayed action</button>
    </div>
  `
})
export class DelayedComponent {

  constructor(private readonly theService: TestService) {
  }

  doDelayedAction() {
    setTimeout(() => this.theService.addMessage('A delayed action'), 1000)
  }
}
