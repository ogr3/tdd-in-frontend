import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>{{ title }} app is running!</div>
  `
})
export class AppComponent {
  title = 'angular-tdd';
}
