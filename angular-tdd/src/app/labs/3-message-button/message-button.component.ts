import { Component } from '@angular/core'

@Component({
  selector: 'app-message-button',
  template: `
    <div class="message-button">
      <button (click)="showMessage()">Klicka</button><span *ngIf="message">{{message}}</span>
    </div>
  `,
  styles: [`
      .message-button {
        border: 1px grey solid;
        border-radius: 5px;
        background: lightgrey;
        padding: 0.25rem 1.0rem;
      }
      .message-button > button {
        margin-right: 1rem;
      }
  `]

})
export class MessageButton {
  message?: string;
  showMessage() {
    this.message = 'Halloj!';
  }
}
