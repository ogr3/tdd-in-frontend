import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http'
import { action } from '@storybook/addon-actions'
import { moduleMetadata } from '@storybook/angular'
import {
  Meta,
  Story
} from '@storybook/angular/types-6-0'
import { HttpComponent } from './http.component'
import { of as observableOf } from 'rxjs'

export default {
  title: 'TDD-Labbar/4. HttpComponent',
  component: HttpComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
    })
  ]
} as Meta<HttpComponent>;

const Template: Story<HttpComponent> = (args: HttpComponent) => ({
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
        provide: HttpClient,
        useValue: {
          get: (url: string) => observableOf({name: 'Banan', payload: new Date('2022-08-26')}),
          post: (url: string, body: any) => {action("POST")(url, JSON.stringify(body)); return observableOf(null)}
        } as Partial<HttpClient>
      }
    ]
  })
];
