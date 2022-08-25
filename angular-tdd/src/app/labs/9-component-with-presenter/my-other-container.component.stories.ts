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
import { of as observableOf } from 'rxjs'
import { MyDumb1Component } from '../8-component-with-structure/my-dumb1.component'
import { MyDumb2Component } from '../8-component-with-structure/my-dumb2.component'
import { MyOtherContainerComponent } from './my-other-container.component'

export default {
  title: 'TDD-Labbar/9. MyOtherContainerComponent',
  component: MyOtherContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
      declarations: [MyDumb2Component, MyDumb1Component, MyDumb2Component],
    })
  ]
} as Meta<MyOtherContainerComponent>;

const Template: Story<MyOtherContainerComponent> = (args: MyOtherContainerComponent) => ({
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
        // We cannot mock MyOtherContainterPresenterService, since it is injected locally in MyOtherContainerComponent
        provide: HttpClient,
        useValue: {
          get: (url: string) => {
            switch (url) {
              case '/api/a-data':
                return observableOf('Data A')
              case '/api/c-data':
                return observableOf(42)
              default:
                return observableOf(null)
            }
          },
          post: (url: string, body: any) => {action("POST")(url, JSON.stringify(body)); return observableOf(null)}
        } as Partial<HttpClient>
      }
    ]
  })
];
