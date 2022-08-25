import { EventEmitter } from '@angular/core'
import {
  render,
  RenderResult
} from '@testing-library/angular'
import {
  fireEvent,
  screen
} from '@testing-library/dom'
import { TestStructureComponent } from './test-structure.component'

describe('MySecondComponent', () => {
  describe('when the component has opened', () => {
    const dOutputMockEmit = jest.fn()
    const dOutputMock = {
      emit: dOutputMockEmit
    } as unknown as EventEmitter<void>
    let tree: RenderResult<TestStructureComponent, TestStructureComponent>;
    beforeEach(async () => {
      tree = await render(TestStructureComponent, {
        componentProperties: {
          dOutput: dOutputMock
        }
      });
    })
    it('should show A', () => {
      expect(screen.getByText('A')).toBeInTheDocument()
    })
    describe('when clicking button B', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText('B', {selector: 'button'}))
      });
      it('should show C', () => {
        screen.getByText('C', {selector: 'p.message'})
      })
      it('should send the event D', () => {
        expect(dOutputMock.emit).toHaveBeenCalled()
      })
    })
  })
})
