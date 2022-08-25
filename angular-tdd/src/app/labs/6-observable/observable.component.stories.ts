import { HttpClientModule } from '@angular/common/http'
import { moduleMetadata } from '@storybook/angular'
import {
  Meta,
  Story
} from '@storybook/angular/types-6-0'
import { of as observableOf } from 'rxjs'
import { TestService } from '../test.service'
import { ObservableComponent } from './observable.component'

export default {
  title: 'TDD-Labbar/6. ObservableComponent',
  component: ObservableComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
      providers: [
        {
          provide: TestService,
          useValue: {
            notifications$: observableOf()
          } as Partial<TestService>
        }
      ]
    })
  ]
} as Meta<ObservableComponent>;

const Template: Story<ObservableComponent> = (args: ObservableComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  moduleMetadata({
    providers: [
      {
        provide: TestService,
        useValue: {
          notifications$: observableOf('notif1 from notifications$ observable', 'notif2 from notifications$ observable')
        } as Partial<TestService>
      }
    ]
  })
];
