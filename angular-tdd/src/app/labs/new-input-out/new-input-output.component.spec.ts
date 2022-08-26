import {render} from "@testing-library/angular";
import {NewInputOutputComponent} from "./new-input-output.component";
import {EventEmitter} from "@angular/core";
import {fireEvent, screen} from "@testing-library/dom";
import {HttpClient} from "@angular/common/http";
import {of as observableOf} from 'rxjs';

describe('NewInputOutputComponent', () => {
  const myOutputMockEmit = jest.fn()
  const myOutputMock = {
    emit: myOutputMockEmit
  } as Partial<EventEmitter<string>>
  const postMock = jest.fn()

  beforeEach(async () => {
    await render(NewInputOutputComponent, {
      providers: [
        {
          provide: HttpClient,
          useValue: {
            post: postMock
          }
        }
      ],
      componentProperties: {
        myOutput: myOutputMock as EventEmitter<string>
      }
    })
  })

  describe('When clicking the "Emit" button', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText("Emit", {selector: 'button'}))
    })

    it('it should send the output event', () => {
      expect(myOutputMockEmit).toHaveBeenCalledWith('Banan')
    })
  })

  describe('When clicking the "Post" button', () => {
    beforeEach(() => {
      postMock.mockImplementation(() => observableOf(null))
      fireEvent.click(screen.getByText('Post'), {selector: 'button'})
    })

    it('it should POST to backend', () => {
      expect(postMock).toHaveBeenCalledWith('/backend', 'Message to backend')
    })
  })

})
