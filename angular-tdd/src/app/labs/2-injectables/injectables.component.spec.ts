import {
  render,
  RenderResult
} from '@testing-library/angular'
import { screen } from '@testing-library/dom'
import { InjectablesComponent } from './injectables.component'

describe('InjectablesComponent', () => {
  describe('when the component has opened', () => {
    let tree: RenderResult<InjectablesComponent, InjectablesComponent>;
    beforeEach(async () => {
      tree = await render(InjectablesComponent);
    })
    it('should show "Some data"', () => {
      expect(screen.getByText(/Some data/)).toBeInTheDocument()
    })
  })
})
