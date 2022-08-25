import { Component } from '@angular/core'
import { MyOtherContainterPresenterService } from './my-other-containter-presenter.service'

@Component({
  selector: 'app-my-other-container',
  template: `
    <app-my-dumb1 style="display: block; margin-bottom: 0.5rem"
                  [inputA]="presenter.dataA$ | async"
                  (outputB)="presenter.handleDumb1ChangeB($event)">
    </app-my-dumb1>
    <app-my-dumb2 [inputC]="presenter.dataC$ | async"
                  (outputD)="presenter.handleDumb2ChangeD($event)">
    </app-my-dumb2>
  `,
  providers: [MyOtherContainterPresenterService]
})
export class MyOtherContainerComponent {
  constructor(readonly presenter: MyOtherContainterPresenterService) {
  }
}
