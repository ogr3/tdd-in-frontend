import {
  render,
  RenderResult
} from '@testing-library/angular'
import { screen } from '@testing-library/dom'
import {
  of as observableOf,
  ReplaySubject
} from 'rxjs'
import { TestService } from '../test.service'
import { ObservableComponent } from './observable.component'

describe('ObservableComponent', () => {
  describe('example of using a subject (good for flows)', () => {
    // Create a mock för TestService and a subject: notificationsSubject,
    // for the observable we need to manipulate in the test cases
    const notificationsSubject = new ReplaySubject<string>(1)
    const theServiceMock: Partial<TestService> = {
      notifications$: notificationsSubject.asObservable()
    }
    let tree: RenderResult<ObservableComponent, ObservableComponent>;
    beforeEach(async () => {
      tree = await render(ObservableComponent, {
        providers: [
          {
            provide: TestService,
            useValue: theServiceMock
          }
        ]
      })
    });

    it('it should show nothing', () => {
      expect(screen.queryByText(/Notifications/)).not.toBeInTheDocument()
    });

    // Example of timeout
    describe('when emitting a number of notification items', () => {
      beforeEach(() => {
        notificationsSubject.next("Notification#1")
        notificationsSubject.next("Notification#2")
        tree.fixture.detectChanges() // Need to trigger Angular change detection when updating the observable
      });

      it('it should show the last notification', () => {
        expect(screen.getByText(/Notification#2/, {selector: 'p'})).toBeInTheDocument()
      });
    });
  });

  describe('example of using static observable (good for a single case)', () => {
    let tree: RenderResult<ObservableComponent, ObservableComponent>;
    beforeEach(async () => {
      tree = await render(ObservableComponent, {
        providers: [
          // Create a mock for TestService and provide a fixed observable for
          // the test case (and possible nested cases)
          {
            provide: TestService,
            useValue: {
              notifications$: observableOf('notif1', 'notif2')
            } as Partial<TestService>
          }
        ]
      })
    });

    it('it should show the last notification', () => {
      expect(screen.getByText(/notif2/, {selector: 'p'})).toBeInTheDocument()
    });
  });
});
