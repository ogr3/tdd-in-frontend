import {
  render,
  RenderResult
} from '@testing-library/angular'
import {
  fireEvent,
  screen
} from '@testing-library/dom'
import { TestService } from '../test.service'
import { DelayedComponent } from './delayed.component'

// Initialize Jest to use fake timers
jest.useFakeTimers();

describe('MyThirdComponent', () => {
  const theService_addMessageMockFn = jest.fn()
  const theServiceMock: Partial<TestService> = {
    addMessage: theService_addMessageMockFn
  }
  let tree: RenderResult<DelayedComponent, DelayedComponent>;
  beforeEach(async () => {
    tree = await render(DelayedComponent, {
      providers: [
        {
          provide: TestService,
          useValue: theServiceMock
        }
      ]
    })
  });

  // Example of timeout
  describe('when doing a delayed action', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText(/do delayed action/i, {selector: 'button'}))
    });

    it('it should not added any message until 1000 ms has passed', () => {
      expect(theService_addMessageMockFn).not.toHaveBeenCalled()
    });

    describe('when 1000 ms has passed', () => {
      beforeEach(() => {
        jest.advanceTimersByTime(1001);
      });
      it('it should have added the message', () => {
        expect(theService_addMessageMockFn).toHaveBeenCalledWith('A delayed action')
      });
    });
  });
});
