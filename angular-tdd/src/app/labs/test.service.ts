import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private readonly messages: Array<string> = [];
  private readonly notificationsSubject = new ReplaySubject<string>(1);
  readonly notifications$ = this.notificationsSubject.asObservable();

  getSomeData(): string {
    return 'Some data'
  }

  getMessages(): Array<string> {
    return this.messages;
  }

  addMessage(message: string): void {
    this.messages.push(message)
  }

  sendNotification(notification: string): void {
    this.notificationsSubject.next(notification)
  }
}
