import { Component } from '@angular/core'
import { TestService } from '../test.service'

@Component({
  selector: 'app-my-third',
  template: `
    <div style="border: 1px grey solid; border-radius: 5px; background: lightgrey; padding: 0.25rem 1.0rem;">
      <div *ngIf="theService.notifications$ | async as latestNotification">
        <h4>Notifications</h4>
        <p>{{latestNotification}}</p>
      </div>
    </div>
  `
})
export class ObservableComponent {
  constructor(readonly theService: TestService) {
  }
}
