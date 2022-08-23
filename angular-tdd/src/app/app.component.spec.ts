import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import {
  render,
  screen
} from '@testing-library/angular'

describe('AppComponent', () => {
  test('should render', async () => {
    await render(AppComponent, {
      imports: [
        RouterTestingModule
      ]
    })

    expect(screen.getByText('angular-tdd app is running!', {selector: 'div'})).toBeInTheDocument()
  })
});
