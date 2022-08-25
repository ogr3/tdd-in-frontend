import { EventEmitter } from '@angular/core'
import {
  render,
  RenderResult
} from '@testing-library/angular'
import {
  fireEvent,
  screen
} from '@testing-library/dom'
import {
  InputOutputComponent,
  MyOutputData
} from './input-output.component'

describe('WithOutputComponent', () => {
  describe('when the component has opened', () => {
    // Here we make a mock of an EventEmitter for the "output" @Output-field in the component
    const myOutputMockEmit = jest.fn() // create a mock function for the EventEmitter.emit() method
    const myOutputMock = {
      emit: myOutputMockEmit
    } as Partial<EventEmitter<MyOutputData>>

    let tree: RenderResult<InputOutputComponent, InputOutputComponent>;

    beforeEach(async () => {
      tree = await render(InputOutputComponent, {
        componentProperties: {
          myInput: {name: 'kaka'}, // Set the value of InputOutputComponent.myInput
          myOutput: myOutputMock  as EventEmitter<MyOutputData> // connect InputOutputComponent.myOutput to the mock
        }
      });
    })

    describe('when clicking the "Emit Output" button', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText(/Emit Output/, {selector: 'button'}))
      });

      it('should send the output event', () => {
        expect(myOutputMock.emit).toHaveBeenCalledWith({result: 'An output event for kaka'})
      })
    })
  })
})
